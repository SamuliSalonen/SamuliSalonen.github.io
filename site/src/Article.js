
//require('fs');
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import me from './Assets/me.png';
import ehgFace from './Assets/emoji.png';
import youtubeLogo from './Assets/youtube.png';
import ehgBackground from './Assets/scr2_upscaled.png';
import twitterLogo from './Assets/Twitter_Logo_Blue.png';
import twitchLogo from './Assets/Glitch_Purple_RGB.png';
import ehgLogo from './Assets/ehglogo.png';
import steamLogo from './Assets/Steam_icon_logo.svg.png';
import maincapsule from './Assets/maincapsule (1).jpg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Social from './components/social/Social.js';
import Game from './components/game/game.js';
import images from "./images.js";
import MainPage from './MainPage';

import Intro from "./Intro.js";
import { CopyBlock, CodeBlock, dracula } from 'react-code-blocks';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./Util.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.scss';
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

            contentChunk(props.title,
                <div className='content-wrapper center-div flexbox-wrapper'>
                    <div className='pre-tag flexbox-content'>
                   
                        {props.info}
                    </div>
                </div>
            )

        }
    </div>
    )
}

export default Article