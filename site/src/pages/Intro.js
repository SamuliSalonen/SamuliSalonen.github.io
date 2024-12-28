
//require('fs');
import React, { useEffect, useState } from 'react';

import me from './../Assets/me.png';

import youtubeLogo from './../Assets/youtube.png';

import twitterLogo from './../Assets/Twitter_Logo_Blue.png';
import twitchLogo from './../Assets/Glitch_Purple_RGB.png';

import steamLogo from './../Assets/Steam_icon_logo.svg.png';

import Social from './../components/social/Social.js';


import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";


function Intro() {

    return <div>


        {
            contentChunk("Samuli Salonen",
                <div>
                    <div className='content-wrapper center-div flexbox-wrapper'>
                        <div className='pre-tag'>

                            <div className='social-wrapper'>
                                <Social name="twitter" linkTo={"https://twitter.com/Ssaldev"} image={twitterLogo} />
                                <Social name="youtube" linkTo={"https://www.youtube.com/@scuffedgamedev"} image={youtubeLogo} />
                                <Social name="twitch" linkTo={"https://www.twitch.tv/clayman_dev"} image={twitchLogo} />
                                <Social name="steam" linkTo={"https://store.steampowered.com/app/2081720/Epic_Hero_Game/"} image={steamLogo} />
                            </div>
                        </div>

                    </div>
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
                                    <li>salonen.samuli1@gmail.com</li>
                                    <li>27</li>
                                    <li>Software developer (c#, js)</li>
                                    <li>Livestreamer</li>

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
                </div>
            )


        }

        {
            contentChunk("About",
                <div className='content-wrapper center-div flexbox-wrapper'>

                    <div className='pre-tag '>

                        <p className='list-paragraph2'>
                            I have been programming since 2014 (total 10 years now.), i've had interest in technical stuff from as young as i can remember.
                            <br></br>
                            I am mostly self taught, even though i did learn the programming basics in ICT-Assembler school.
                            <br></br>

                        </p>
                        Here are some key points that i've learned about programming over the years:
                        <ul>
                            <li className='list-paragraph2'>
                                Proven good design is better than trying to be clever and reinventing the wheel

                            </li>
                            <li className='list-paragraph2'>
                                Clone existing product, and add your own spin to it, a functional product solves many design problems that you didnt even think about before you started.
                            </li>

                            <li className='list-paragraph2'>
                                Component based systems scale the best, even if your application is supposed to be just "1 thing", building things as components makes this code reusable in future projects, because its modular.
                            </li>

                            <li className='list-paragraph2'>
                                SEPARATE YOUR CONCERNS!
                            </li>
                            <li className='list-paragraph2'>
                                Always have demo ready to go... just in case, even if its less than a minium viable product.
                            </li>

                        </ul>

                        <p className='list-paragraph2'>C# and unity is where my strongest tech knowledge is,<br></br> but my biggest strength is being able to use my existing knowledge  into learning new things
                        </p>
                        <hr></hr>
                        <p className='list-paragraph2'>
                            This website is built using React.js, and hosted through github pages,
                            the source code is available <a href="https://github.com/SamuliSalonen/SamuliSalonen.github.io/blob/master/site/src/App.js">Here</a>
                        </p>
                        Contact
                        <p className='list-paragraph2'>
                            Best way to contact me is through email here: salonen.samuli1@gmail.com
                        </p>

                    </div>

                </div>
            )
        }

    </div >
}

export default Intro;