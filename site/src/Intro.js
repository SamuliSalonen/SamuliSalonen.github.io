
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


import Social from './components/social/Social.js';
import Game from './components/game/game.js';
import images from "./images.js";
import MainPage from './MainPage';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./Util.js";

import './App.scss';

function Intro() {

    return <div>    {
        contentChunk("Samuli Salonen",
            <div className='content-wrapper center-div flexbox-wrapper'>

                <div className='pre-tag flexbox-content'>
                    <img style={{
                        width: "200px"

                    }} src={me}></img>
                    <div>
                        {
                            //<strong>Skills</strong>
                        }
                        <ul style={{
                            "margin-left": "20px",
                            "margin-top": "-10px",

                        }}>
                            <li>27</li>
                            <li>Programmer (c#, javascript)</li>
                            <li>Unity game engine</li>
                            <li>Game Designer</li>
                            <li>Web developer (full stack)</li>

                            <li>
                                3D Modeling (Blender)
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }</div>
}

export default Intro;