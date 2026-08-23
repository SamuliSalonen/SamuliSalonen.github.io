
import React, { useEffect, useState, useRef } from 'react';
import './styles/index.scss';
import Header from './components/Header';
// ── Assets ────────────────────────────────────────────────
import ehgFace from './Assets/emoji.png';
import ehgLogo from './Assets/ehglogo.png';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Intro from './components/Intro';
import Article from './pages/Article';
import Portfolio from './pages/portfolio';
import PolymorphismArticle from './pages/PolymorphismArticle';
import EventbusArticle from './pages/EventbusArticle';
import SimpleProcAnimArticle from './pages/SimpleProcAnim';
import StateMachineArticle from './pages/StateMachineArticle';
import ShaderArticle from './pages/ShaderArticle';
import CustomAnimationArticle from './pages/CustomAnimationArticle';
import InputBufferingArticle from './pages/InputBufferingArticle';
import Articles from './pages/Articles';
import Home from './components/Home';
import Gallery from './components/Gallery';
import PatchNotes from './components/PatchNotes';
import Skills from './pages/skills';
import CV from './components/cv';

//import './App.scss';

//import Header from "./Header";

function App() {
  const steam = "https://store.steampowered.com/app/2081720/Epic_Hero_Game/";
  const kofi = "https://ko-fi.com/scuffedgamedev"
  const discordLink = "https://discord.gg/YBESVNMwku";
  const [bgName, setBgName] = useState("background");
  const twitchChannelName = "clayman_dev";
  const twitch = "https://www.twitch.tv/clayman_dev";
  //artStyleExpanded
  //const [monsterNum, setMonsterNum] = useState(0);
  const [scrollY, setScrollY] = useState(0);

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
  const navRef = useRef(null);
  const [isNavPinned, setIsNavPinned] = useState(false);

  

const [navOpen, setNavOpen] = useState(false);
 
// Close the panel if the viewport grows past the breakpoint while it
// is open — otherwise rotating to landscape strands it over the row.
useEffect(() => {
  const mq = window.matchMedia('(min-width: 769px)');
  const onChange = (e) => e.matches && setNavOpen(false);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}, []);
  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const initialTop = nav.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      setIsNavPinned(window.scrollY > initialTop);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setNavOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const navbar = (discordLink, kofi, steam) => (
    <>
      <li><a href="#patchnotes">Patch Notes</a></li>
      <li><a href={steam} target="_blank" rel="noopener noreferrer">Steam</a></li>
      <li><a href="#games">Games</a></li>
      <li><a href={kofi} target="_blank" rel="noopener noreferrer">Support</a></li>
      <li><a href={discordLink} target="_blank" rel="noopener noreferrer">Contact</a></li>
    </>
  );
  return (

    <div className="App">
      <header className="">
        <div class={bgName}></div>
        <div className={`site-nav-wrapper ${isNavPinned ? 'site-nav-wrapper--pinned' : ''
          }`}>


             <nav
            ref={navRef}
            className={isNavPinned ? 'site-nav site-nav--pinned' : 'site-nav'}
          >
            <a className="logo-link" href="#top">
              <img className="logo" src={ehgFace} alt="" />
              <span className="site-title">Scuffed Gamedev</span>
            </a>

            <button
              type="button"
              className="nav-toggle"
              aria-expanded={navOpen}
              aria-controls="nav-links"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setNavOpen((v) => !v)}
            >
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
              <span className="nav-toggle__bar" />
            </button>

            <ul
              id="nav-links"
              className={`nav-links${navOpen ? ' is-open' : ''}`}
              onClick={() => setNavOpen(false)}
            >
              {navbar(discordLink, kofi, steam)}
            </ul>
          </nav>
          {/*
          <Social linkTo={"https://twitter.com/Ssaldev"} image={twitterLogo} />
          <Social linkTo={"https://www.youtube.com/@scuffedgamedev"} image={youtubeLogo} />
          <Social linkTo={"https://www.twitch.tv/clayman_dev"} image={twitchLogo} />
          <Social linkTo={"https://discord.gg/YBESVNMwku"} image={discordLogo} />
          <Social linkTo={"https://www.tiktok.com/@scuffedgamedev"} image={tiktokLogo} />
          <Social linkTo={"https://store.steampowered.com/app/2081720/Epic_Hero_Game/"} image={steamLogo} />
      */}
        </div>

        <div class="landing flexbox-root">
          <img class="game-logo" src={ehgLogo}></img>
          <div class="center-all">

            <a href={discordLink} target="_blank"><button class="join-btn">Join Playtest</button></a>

          </div>
        </div>


      </header>
      {/*
      <div className='primary-content'>
        <HashRouter>
         
          <Routes>
            <Route index element={<Intro />} />
            <Route path="/about" element={<Intro />} ></Route>
            <Route path="/skills" element={<Skills />} ></Route>
            <Route path="/portfolio" element={<Portfolio />} ></Route>
            <Route path="/article" element={<Articles></Articles>} ></Route>
            <Route path="/article/ehg" element={<Article title={"Epic Hero Game"} info={<CustomAnimationArticle />}></Article>} />
            <Route path="/article/polymorphism" element={<Article title={"polymorphism"} info={<PolymorphismArticle></PolymorphismArticle>}></Article>} />
            <Route path="/article/eventbus" element={<Article title={"eventbus"} info={<EventbusArticle />}></Article>} />
            <Route path="/article/simpleprocanim" element={<Article title={"simple procedural animation"} info={<SimpleProcAnimArticle />}></Article>} />
            <Route path="/article/statemachine" element={<Article title={"statemachine"} info={<StateMachineArticle />}></Article>} />
            <Route path="/article/inputbuffer" element={<Article title={"input buffering"} info={<InputBufferingArticle />}></Article>} />
            <Route path="/article/shaders" element={<Article title={"Shaders"} info={<ShaderArticle />}></Article>} />
          </Routes>
        </HashRouter>

      </div >

   */         }
      <div className='primary-content'>
        <div className='content-block'>

       
          <Home kofi={kofi} twitchChannel={twitchChannelName}></Home>
          <div>
            {
              <PatchNotes appId={24640663} feeds="steam_community_announcements" />
            }
          </div>

        </div>

      </div >

      <footer>
        <div class="footer-container">
          <div class="footer-logo">Scuffed Gamedev</div>
          <ul class="footer-links">
            {
              navbar(discordLink, kofi, steam)
            }
          </ul>
        </div>
        <div class="footer-bottom">
          &copy; {new Date().getFullYear()} Scuffed Gamedev. All rights reserved.
        </div>
      </footer>

    </div >
  );
}

export default App;
