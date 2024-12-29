
//require('fs');
import React, { useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
/*
<div class="code-wrapper">

<SyntaxHighlighter language="c#" style={docco}>
    {codeString}
</SyntaxHighlighter>
</div>
*/
const codeString = 'public virtual void Test() {}';
function CustomAnimationArticle(props) {
    return (<div className=" ">
        <div className="list-paragraph2">
            <b>Epic Hero Game animation system</b>
            <br></br>

            <img className='code-architecture-diagram'src={require("./../Assets/ehg3.png")}></img>
            <p>Key design requirements:</p>
            <ul>
                <li>System must be reusable in any kind of game</li>
                <li>Animated character must be able to transition from any dynamic state</li>
                
                <li>Capability to take any animation and chunk it up in a way that makes it easy to implement functionality like hitstop</li>
                <li>Single responsibility, eventbus gives orders how to behave, animation behaves as expected, any kind of cooldown of sorts, must be implemented on the player layer</li>
                <li>Physics & Inverse kinematics support</li>
                <li>Easily add behaviour to a chunk in the animation</li>
                <li>Component based design, if i work on feature x, it should have no affect on feature y</li>
            </ul>
        </div>


    </div >)
}

export default CustomAnimationArticle