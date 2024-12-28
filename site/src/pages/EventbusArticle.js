
//require('fs');
import React, { useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EventbusArticle(props) {
    return <div className=" ">
        <div className="list-paragraph2">

            <div>
                <p>
                    <b>Eventbus</b>
                    <br></br>is one of the best design patterns when it comes to building complex applications<br></br>
                    <p>By design, it forces developers to separate concerns into smaller chunks that are easier to maintain.
                        For example, when using the Eventbus pattern, implementing attacks for the player, and enemy ai becomes easy, as the event listener does not care where the event comes from, all it cares is the fact that it just received data, and is ready to act on it.

                    </p>
                    <p>Without the eventbus, implementing this can be tricky, as the 'command' to attack, for ai and player is totally different, with player you are waiting for keypress, and for ai, you are waiting for the ai system to decide to attack</p>
                    <p>Lets take a look how i implemented eventbus in my game</p>
                    <p>First off, i declare a basic interface, that all my events inherit from, so they can be stored in a dictionary</p>
                </p>
                <div className='code-wrapper'>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public interface IEventBase
{
 
}
`
                        }`
                        }
                    </SyntaxHighlighter>

                    <p>
                        Declare eventbus class, i like to use an instanced bus, but this can also be used in a static way.
                    </p>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class EventBus
{
    
    //dictionary of events, where the type is the key to the callback
    public Dictionary<Type, Action<IEventBase>> _eventListeners = new Dictionary<Type, Action<IEventBase>>();
    //event sub method, Usage: bus.Subscribe<EventType>((EventType data)=>{ ... })
    public void Subscribe<T>(Action<T> listener) where T : IEventBase
    {
        var eventType = typeof(T);

        if (!_eventListeners.ContainsKey(eventType))
        {
            _eventListeners[eventType] = e => { };
        }

        _eventListeners[eventType] += (e) => listener((T)e);
    }

    //raise events, Usage: bus.Raise<EventType>(new EventType( ... ))
    public void Raise<T>(T eventItem) where T : IEventBase
    {
        var eventType = typeof(T);
 
        if (_eventListeners.ContainsKey(eventType))
        {
            _eventListeners[eventType]?.Invoke(eventItem);
 
        }
    }

}
`
                        }`
                        }
                    </SyntaxHighlighter>
                    <p>Next we have to declare an event we can use, i will create an attack event, where we tell where we are about to attack</p>

                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public struct AttackCommand : IEventBase
{
        public Vector3 targetPoint;
}
`
                        }`
                        }
                    </SyntaxHighlighter>

                    <p>Here is a simple example how this could be used</p>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class Player
{
    public EventBus bus = new EventBus();
    void Update()
    {
        //read input
        if (Input.GetMouseButtonDown(0))
        {
            bus.Raise(new AttackCommand()
            {
                targetPoint = Input.mousePosition
            });
        }
    }
}
`
                        }`
                        }
                    </SyntaxHighlighter>

                    <p>Here is an example how ai could use this</p>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class AI
{
    public EventBus bus = new EventBus();
    void Update()
    {
        if (NearPlayer())
        {
            bus.Raise(new AttackCommand()
            {
                targetPoint = PlayerPosition()
            });
        }
    }
}
`
                        }`
                        }
                    </SyntaxHighlighter>
                    Here is an example how to atually implement the event
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class Character : MonoBehaviour
{


    void Start()
    {
        bus.Subscribe<AttackCommand>((command) =>
        {
            transform.LookAt(command.targetPoint);
            //animate attack here.. etc
        })
    }

}
`
                        }`
                        }
                    </SyntaxHighlighter>
                    <br></br>
                    <p>                    The most beautiful thing about the eventbus pattern is that, you can have more than one subscriber to an event, which makes it easy to integrate UI, or spawn damage texts, etc.<br></br>
                    </p>

                    <p>
                        Another option is to add a multiplayer layer in between, you give the bus an object, then the middle layer sends the object to all clients, and then the object gets deserialized, and handled on all clients, with no hazzle.
                    </p>
                </div>
            </div>
        </div>

    </div >
}

export default EventbusArticle