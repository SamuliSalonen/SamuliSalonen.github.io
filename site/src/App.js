
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
import SimpleProcAnimArticle from './SimpleProcAnim';
import StateMachineArticle from './StateMachineArticle';
import ShaderArticle from './ShaderArticle';
import InputBufferingArticle from './InputBufferingArticle';
import Intro from "./Intro.js";
import { CopyBlock, CodeBlock, dracula } from 'react-code-blocks';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./Util.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.scss';
import { useNavigate } from "react-router-dom";
import Header from "./Header";

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
      <Header></Header>
      <div className='primary-content'>



    
        

        <HashRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="/article/polymorphism" element={<Article title={"polymorphism"} info={<PolymorphismArticle></PolymorphismArticle>}></Article>} />
            <Route path="/article/eventbus" element={<Article title={"eventbus"} info={<EventbusArticle />}></Article>} />
            <Route path="/article/simpleprocanim" element={<Article title={"simple procedural animation"} info={<SimpleProcAnimArticle />}></Article>} />
            <Route path="/article/statemachine" element={<Article title={"statemachine"} info={<StateMachineArticle />}></Article>} />
            <Route path="/article/inputbuffer" element={<Article title={"input buffering"} info={<InputBufferingArticle />}></Article>} />
            <Route path="/article/shaders" element={<Article title={"Shaders"} info={<ShaderArticle />}></Article>} />
          </Routes>
        </HashRouter>

      </div >



    </div >
  );
}

export default App;
