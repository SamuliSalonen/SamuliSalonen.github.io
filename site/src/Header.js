
//require('fs');
import React, { useEffect, useState } from 'react';

import ehgFace from './Assets/emoji.png';

import './App.scss';

import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';


function Header() {
    const location = useLocation(); // Access the current location

    const [scrollY, setScrollY] = useState(0);
    const [bgName, setBgName] = useState("background");
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
    const getLinkClass = (arg) => {
        if (location.pathname.includes(arg)) {
            return "current-link";
        }
        else {
            return "";
        }
    };
    return (


        <header className="App-header">
            {
                //        location.pathname
            }
            <div className={bgName}></div>
            <div className="flexbox-root socials-root">
                <a href='/#/' ><img className="ehg-face" src={ehgFace}></img></a>
                <a href="#/about" className={getLinkClass("about")}><div className='nav-btn'>About</div></a>
                <a href="#/article" className={getLinkClass("article")}><div className='nav-btn'>Articles</div></a>
                <a href="#/skills" className={getLinkClass("skills")}><div className='nav-btn'>Skills</div></a>
                <a href="#/portfolio" className={getLinkClass("portfolio")}><div className='nav-btn'>portfolio</div></a>

            </div>







        </header>

    );
}

export default Header;
