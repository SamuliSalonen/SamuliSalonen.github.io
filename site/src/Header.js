
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

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Social from './components/social/Social.js';
import Game from './components/game/game.js';
import images from "./images.js";
import MainPage from './MainPage';
import Article from './Article';
import PolymorphismArticle from './PolymorphismArticle';
import EventbusArticle from './EventbusArticle';
import Intro from "./Intro.js";
import { CopyBlock, CodeBlock, dracula } from 'react-code-blocks';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./Util.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.scss';
import { useNavigate } from "react-router-dom";


function Header() {


    const [bgName, setBgName] = useState("background");

    return (


        <header className="App-header">
            <div class={bgName}></div>
            <div className="flexbox-root socials-root">
                <img className="ehg-face" src={ehgFace}></img>
                <Social linkTo={"https://twitter.com/Ssaldev"} image={twitterLogo} />
                <Social linkTo={"https://www.youtube.com/@scuffedgamedev"} image={youtubeLogo} />
                <Social linkTo={"https://www.twitch.tv/clayman_dev"} image={twitchLogo} />
                <Social linkTo={"https://store.steampowered.com/app/2081720/Epic_Hero_Game/"} image={steamLogo} />
            </div>







        </header>

    );
}

export default Header;
