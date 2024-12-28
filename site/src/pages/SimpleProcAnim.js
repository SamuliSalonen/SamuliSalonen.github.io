
//require('fs');
import React, { useEffect, useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function SimpleProcAnimArticle(props) {
    return <div className=" ">
        <div className="list-paragraph2">

            <div>
                <p>
                    <b>Procedural animation</b>
                    <br></br>is when you animate something with code, in this example we create a sphere, <br></br>and scale it with smoohly with a sin curve, by feeding it the current engine time
                </p>
                <div className='code-wrapper'>
                
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            ` public class Test : MonoBehaviour
{
    public GameObject sphere;
    private void Awake()
    {
        sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
    }

    private void Update()
    {
        sphere.transform.localScale = Vector3.one * Mathf.Sin(Time.time);
    }
}
`
                        }`
                        }
                    </SyntaxHighlighter>
                   
                </div>
            </div>
        </div>

    </div >
}

export default SimpleProcAnimArticle