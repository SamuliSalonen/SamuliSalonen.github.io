
//require('fs');
import React, { useEffect, useState } from 'react';

import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";
function Articles(props) {
    return (


        contentChunk("Articles",
            <div className='content-wrapper center-div'>
                <div className='pre-tag flexbox-content'>
                    <div>
                        <p>Technical explanations of programming concepts</p>

                        <ul>
                            <a href="#/article/ehg"><li className='list-paragraph2'>Epic Hero Game</li></a>
                            <a href="#/article/polymorphism"><li className='list-paragraph2'>Polymorphism</li></a>
                            <a href="#/article/eventbus"><li className='list-paragraph2'>Eventbus</li></a>
                            <a href="#/article/statemachine"><li className='list-paragraph2'>Statemachine</li></a>
                            <a href="#/article/simpleprocanim"><li className='list-paragraph2'>Simple procedural animation</li></a>
                            <a href="#/article/inputbuffer"><li className='list-paragraph2'>Input buffering</li></a>
                            <a href="#/article/shaders"><li className='list-paragraph2'>Shaders</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        )

    )
}

export default Articles