
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
import Article from './Article';
import PolymorphismArticle from './PolymorphismArticle';
import Intro from "./Intro.js";
import { CopyBlock, CodeBlock, dracula } from 'react-code-blocks';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./Util.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.scss';



function App() {


  const [scrollY, setScrollY] = useState(0);
  const [bgName, setBgName] = useState("background");
  const [artStyleExpanded, setArtStyleExpanded] = useState(false);
  const [technicalsExpanded, setTechnicalsExpanded] = useState(false);
  const [enemyDesignExpanded, setEnemyDesignExpanded] = useState(false);

  const [levelDesignExpanded, setLevelDesignExpanded] = useState(false);
  //artStyleExpanded
  //const [monsterNum, setMonsterNum] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      let backgroundClassName = "background no-blur";
      if (window.scrollY > 100) {
        backgroundClassName = "background blur";
      }
      if (window.scrollY > 200) {
        backgroundClassName = "background blur-hard";
      }


      setBgName(backgroundClassName);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const codeString = 'public virtual void Test() {}';
  return (

    <div className="App">
      {
        //     <img src={ehgBackground}></img>
      }
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
      <div className='primary-content'>



        {
          /*
          contentChunk("Articles",
            <div className='content-wrapper center-div flexbox-wrapper'>
              <div className='pre-tag flexbox-content'>
                <div class="code-wrapper">

                  <SyntaxHighlighter language="c#" style={docco}>
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          )
          */
        }
        )

        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="article/polymorphism" element={<Article title={"polymorphism"} info={<PolymorphismArticle></PolymorphismArticle>}></Article>} />
          </Routes>
        </BrowserRouter>

      </div >



    </div >
  );
}

export default App;
