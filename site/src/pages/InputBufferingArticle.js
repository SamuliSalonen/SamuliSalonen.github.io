
//require('fs');
import React, { useEffect, useState } from 'react';


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function InputBufferingArticle(props) {
    return <div className=" ">
        <div className="list-paragraph2">

            <div>
                <p>
                    <b>Input buffering</b>
                    <br></br>is the way you make character controllers feel responsive<br></br>
                    This is required, because the way computers work is very binary, something either is true, or false, there is no between.<br></br>
                    <p>
                        So when humans play video games, sometimes it can "feel" like you just pressed a button, and nothing happens, to get around this problem<br></br>
                        we must implement input buffering
                    </p>
                    <br></br>
                    <p>
                        Most commonly this is implemented as coyote time in platformers, the same concepts apply in any kind of input buffering system.
                    </p>
                </p>
                <div className='code-wrapper'>

                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class Player
{
    float m_LastGroundedTime = -1;
    float m_LastJumpDownTime = -1;
    void Update()
    {
        if (IsGrounded())
            m_LastGroundedTime = Time.time;

        if (Input.GetKeyDown(KeyCode.Space))
        {
            m_LastJumpDownTime = Time.time;
            //make sure we were grounded withing the threshold, this is "coyote time"
            if (Time.time <= m_LastGroundedTime + .25f)
                Jump()
        }

        //on become grounded detection goes here

    }

    //onbecomegrounded handles the scenario where players jumps shortly before actually landing
    void OnBecomeGrounded()
    {

        //define threshold when jumping is still allowed
        if (Time.time <= m_LastJumpDownTime + .25f)
        {
            Jump();
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

export default InputBufferingArticle