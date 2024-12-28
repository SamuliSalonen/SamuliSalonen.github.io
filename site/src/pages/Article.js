
//require('fs');
import React, { useEffect, useState } from 'react';

import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";

/*
<div class="code-wrapper">

<SyntaxHighlighter language="c#" style={docco}>
    {codeString}
</SyntaxHighlighter>
</div>*/
const codeString = 'public virtual void Test() {}';
function Article(props) {

    return (<div>
        {

        }
        {

            contentChunk(props.title,
                <div className='content-wrapper center-div flexbox-wrapper'>
         {/*
                    <div className='back-btn-container'>
                        <a href="/#/article"><p>Back</p></a>
                    </div>
            */}
                    <div className='pre-tag flexbox-content'>
                        {/*               <div className='back-btn-container'>
                            <button className='back-button' onClick={() => navigate(-1)}><p>Back</p></button>
                        </div>
            */}
                        {props.info}
                    </div>
                </div>
            )

        }
    </div>
    )
}

export default Article