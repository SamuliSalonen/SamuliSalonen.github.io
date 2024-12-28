
//require('fs');
import React, { useEffect, useState } from 'react';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function StateMachineArticle(props) {
    return <div className=" ">
        <div className="list-paragraph2">

            <div>
                <p>
                    <b>State machines</b>
                    <br></br>are another fantastic way of breaking problems into smaller chunks
                </p>
                <div className='code-wrapper'>
                
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class State
{
    public virtual void Enter() { }
    public virtual void Exit() { }
    public virtual void Update() { }
}
                           
`
                        }`
                        }
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class StateMachine
{
    //backing field for state
    State m_CurrentState;

    public State currentState
    {
        get
        {
            return m_CurrentState;
        }
        set
        {
            //check if previous state exists
            if (m_CurrentState != null)
                //send exit signal
                m_CurrentState.Exit();
            //update current state
            m_CurrentState = value;
            //send enter signal
            m_CurrentState.Enter();
        }
    }
}                         
`
                        }`
                        }
                    </SyntaxHighlighter>
                   TODO
                </div>
            </div>
        </div>

    </div >
}

export default StateMachineArticle