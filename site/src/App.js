import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Intro from './pages/Intro';
import Article from './pages/Article';
import Portfolio from './pages/portfolio';
import PolymorphismArticle from './pages/PolymorphismArticle';
import EventbusArticle from './pages/EventbusArticle';
import SimpleProcAnimArticle from './pages/SimpleProcAnim';
import StateMachineArticle from './pages/StateMachineArticle';
import ShaderArticle from './pages/ShaderArticle';
import InputBufferingArticle from './pages/InputBufferingArticle';
import Articles from './pages/Articles';

import Skills from './pages/skills';


import './App.scss';

import Header from "./Header";

function App() {


  return (

    <div className="App">


      <div className='primary-content'>
        <HashRouter>
          <Header ></Header>
          <Routes>
            <Route index element={<Intro />} />
            <Route path="/about" element={<Intro />} ></Route>
            <Route path="/skills" element={<Skills />} ></Route>
            <Route path="/portfolio" element={<Portfolio />} ></Route>
            <Route path="/article" element={<Articles></Articles>} ></Route>
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
