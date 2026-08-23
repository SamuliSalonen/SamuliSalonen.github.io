
//require('fs');
import React, { useEffect, useState } from 'react';

import me from './../Assets/me.png';

import youtubeLogo from './../Assets/youtube.png';

import twitterLogo from './../Assets/Twitter_Logo_Blue.png';
import twitchLogo from './../Assets/Glitch_Purple_RGB.png';

import steamLogo from './../Assets/Steam_icon_logo.svg.png';

import Social from './../components/social/Social.js';


import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";
import { section } from 'framer-motion/client';


function CV() {

    return (<section className="section">
        <div className="container"><div>


            Strengths

            <ul className='list-paragraph2'>
                <li>ability to learn and pivot really fast</li>

                <li>ability to break a big problem into small chunks, and ask right questions</li>
                <li>ability to reverse engineer what code does, without reading comments</li>
                <li>endless creativity</li>
                <li>quick prototyping</li>
                <li>growth mindset</li>
                <li>lots of unity experience</li>
                <li>self imposed</li>
            </ul>

            <p className='list-paragraph2'>
                I am Samuli, A Self taught game developer from finland.<br></br>
                I've played videogames all my life, starting from fun platformers such as Sly Cooper and Ratchet & clank game series.<br></br>
                Every time my parents would tell me that my time on the console was up, i would go outside and imagine in my head what i would add to these games, and how the story would continue.<br></br>

            </p>
            <p>2014</p>

            <p className='list-paragraph2'>
                I got my start in 2014 when i heard about the Unity game engine, in class, when one of the students what showing a first person shooter game that they had made themselves.<br></br>
                Back then i thought you needed massive studios for games like this, but as soon as i learned that it was not the case, i started learning about programming & game development on my free time.

            </p>
            <p>2016</p>
            <p className='list-paragraph2'>
                I graduated as an ICT-Assembler in 2016, and spent until 2017 as an IT support, working at KavoKerr group, but i would still spend all of my free time learning about game development.

            </p>
            <p>2018</p>
            <p className='list-paragraph2'>

                I spent 2018 in the finnish army, and completed my service as signaller.
            </p>

            <p>2019-present</p>
            <p className='list-paragraph2'>

                When the pandemic hit in 2020, i thought that this was the perfect opportunity to start pursuing game development full time,<br></br>
                so i built a small puzzle game called Drawzle, which i shipped on google play store in 2021.<br></br>
                <br></br>
                Next i wanted to try doing something bigger, that would take something from all the prototypes i had built over the years, this game ended up becoming Epic Hero Game.<br></br>
                I Spent 2 years working on it, and feel like i learned 5 years worth of knowledge on the project.
            </p>

            I've documented my journey on my <a href='https://twitter.com/Ssaldev' className='link'>Twitter</a><br></br>
            <p className='list-paragraph2'>
                And livestreamed most of the development of EHG on twitch.
            </p>
        </div>
        </div>
    </section >
    );
}
export default CV;