
//require('fs');
import React, { useEffect, useState } from 'react';

import ehgFace from './Assets/emoji.png';

import './App.scss';



function Header() {

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

    return (


        <header className="App-header">
            <div class={bgName}></div>
            <div className="flexbox-root socials-root">
                <a href='/#/'><img className="ehg-face" src={ehgFace}></img></a>
                <a href="#/about"><div className='nav-btn'>About</div></a>
                <a href="#/article"><div className='nav-btn'>Articles</div></a>
                <a href="#/skills"><div className='nav-btn'>Skills</div></a>
                <a href="#/portfolio"><div className='nav-btn'>portfolio</div></a>

            </div>







        </header>

    );
}

export default Header;
