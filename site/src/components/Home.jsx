import React from 'react';
import GameGrid from './GameGrid';
import Intro from './Intro';
import CV from './cv';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import RoadmapPanel from './RoadmapPanel';
import { Support, TwitchPanel } from './CalloutPanel';

/*  description={"Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities."}
-              link={steam}
-              video={"https://www.youtube.com/embed/ias3KT3sFRE"}
-              title={"Epic Hero Game"}
-              tags={["Early Access", "Roguelite", "Physics-Based", "Superhero", "Action"]}*/

const games = [
  {
    id: 'main',
    title: "Epic Hero Game",
    description: "Epic Hero game is a physics-based roguelite Game. Build your own superhero and fight off against an alien invasion on the world. Defend the fully destructible map using a variety of skills, moves and abilities."
    ,
    video: "https://www.youtube.com/embed/ias3KT3sFRE",
    image: '',
    link: 'https://store.steampowered.com/app/2081720/Epic_Hero_Game/',
    tags: ['Early Access', 'Roguelite', 'Physics-Based', 'Superhero', 'Action'],
    featured: true,
  },
];

/* Oldest first. The rail fills top-down, so chronological order
   is what makes the progress read correctly. */
const milestones = [
  { status: 'Pending', text: 'Early access on Steam' },
  { status: 'In-Progress', text: 'Upgrade system design' },
  { status: 'Completed', text: 'Initial prototype finished' },
  { status: 'Completed', text: 'Physics engine upgrade' },



];

const Home = ({ kofi, twitchChannel }) => (
  <>
    <HashRouter>

      <Routes>
        <Route index element={<>
          <Intro></Intro>
    
          <GameGrid title="Our games" games={games} meta="1 in early access" />

        </>
        } />
        <Route path="/about" element={<>
          <Intro></Intro>
          <CV></CV>

        </>

        } ></Route>
      </Routes>
    </HashRouter>


    <section className="section section--raised">
      <div className="container">
        <div className="home-aside">
          <RoadmapPanel milestones={milestones} title="Roadmap" />

          <div className="callout-row">
            <Support link={kofi} />
            <TwitchPanel channelName={twitchChannel} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;