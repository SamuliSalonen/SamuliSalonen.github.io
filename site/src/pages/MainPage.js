
//require('fs');
import React, { useEffect, useState } from 'react';

//import images from "./images.js";
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";
//import Intro from "./Intro.js";

function MainPage(props) {


    //   const [currentPage, setCurrentPage] = useState("main");
    return (
        <div>
            {
              //  < Intro ></Intro>
            }
          
            {
                contentChunk("About",
                    <div className='content-wrapper center-div flexbox-wrapper'>

                        <div className='pre-tag flexbox-content'>

                            <div>
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
                    </div>
                )
            }
            {
                contentChunk("List of skills",
                    <div className='content-wrapper center-div flexbox-wrapper'>

                        <div className='pre-tag flexbox-content'>

                            <div>
                                <ul className='list-paragraph2'>
                                    <li>Unity </li>
                                    <li>Photon PUN (network engine for unity) </li>

                                    <li>Mirror (network engine for unity) </li>

                                    <li>Puppet Master (ragdoll engine for unity) </li>

                                    <li>Final IK (Inverse kinematics library for unity) </li>
                                    <li>Digger (Voxel engine for unity) </li>
                                    <li>Unity shadergraph </li>
                                    <li>Unity Job system basics </li>
                                    <li>C#</li>

                                    <li>Javascript</li>


                                    <li>Blender (3d Modeling)</li>
                                    <li>node.js</li>
                                    <li>OAuth implementation experience (auth0, twitter, twitch, discord)</li>
                                    <li>React.js</li>
                                    <li>React redux</li>
                                    <li>Angular.js</li>
                                    <li>css</li>
                                    <li>C# ASP.net</li>
                                    <li>mssql</li>
                                    <li>Git</li>
                                    <li>Unreal 5 basics </li>
                                    <li>C++ Basics</li>


                                    <li>Python basics</li>
                                    <li>Tensorflow basics</li>
                                    <li>Linux basics</li>
                                    <li>Windows server admin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                contentChunkWithVideo("Bottle flip AR (2019) (unity)", <div>

                    <div className="ehg-highlight-font"></div>
                    {
                        //    is a roguelite/soulslike about a reincarnated superhero who was looking to relax in the afterlife but, due to a certain set of events, ends up helping to save the world from an alien invasion that threatens to destroy it, quite literally.
                    }
                    {/*    <p className='list-paragraph'>Is a roguelite / soulslike built around the idea of ridiculous power scaling anime genre (Dragonball / One Punch Man), where you can always keep getting stronger, you can stack things together, and your appearance changes as you level up, at its core its a parody (why would changing hairstyle make you stronger?, well this game actively tries to lean into that)
          You play as a custom superhero with many absurd build possibilities, and you are saving the world from total destruction... literally!
        </p>
  */}
                    <p className='list-paragraph'>
                        Bottle Flip AR is a simple mobile game that is built with ARCore
                        <p className='list-paragraph2'>
                            It scans the camera feed,
                            <br></br> generates 3d geometry where it detects a surface.
                            <br></br> And you need to land a bottle on the generated surface.
                        </p>
                        Takeaways
                        <ul className='list-paragraph2'>
                            <li>Take unique idea and actually complete a project</li>

                            <li>really difficult to built an audience with AR games, because it requires camera permission</li>

                        </ul>
                        <p className='list-paragraph2'>
                            This game is no longer available for download, because play store updated their requirements, and i did not have time to support it.
                        </p>
                    </p>


                </div>, require("./../Assets/ehgvids/bottleflip.mp4"))

            }
            {
                contentChunkWithVideo("Drawzle (2020) (unity)", <div>
                    <p>
                        <div className="ehg-highlight-font"></div>
                        {
                            //    is a roguelite/soulslike about a reincarnated superhero who was looking to relax in the afterlife but, due to a certain set of events, ends up helping to save the world from an alien invasion that threatens to destroy it, quite literally.
                        }
                        {/*    <p className='list-paragraph'>Is a roguelite / soulslike built around the idea of ridiculous power scaling anime genre (Dragonball / One Punch Man), where you can always keep getting stronger, you can stack things together, and your appearance changes as you level up, at its core its a parody (why would changing hairstyle make you stronger?, well this game actively tries to lean into that)
          You play as a custom superhero with many absurd build possibilities, and you are saving the world from total destruction... literally!
        </p>
  */}
                        <p className='list-paragraph'>
                            Drawzle is a physics based puzzle game where the levels are solved by drawing on the screen.
                            <p className='list-paragraph2'>
                                The objective is to land the ball to the goal.

                                The ball can be guided towards the goal by drawing lines to the level or erasing obstacles on the way.

                                <br></br>Points are scored by guiding the ball towards stars that are placed all over the level.  </p>
                        </p>
                        <p className='list-paragraph2'>
                            <a href="https://play.google.com/store/apps/details?id=com.samulisalonengames.Drawzle" className="download-btn">Link to store page</a>
                        </p>
                        Takeaways
                        <ul className='list-paragraph2'>
                            <li>Take unique idea and actually complete a project</li>

                            <li>Better understanding of how game physics works</li>

                            <li>Better understanding of how 3d Geometry works</li>
                        </ul>

                    </p>


                </div>, require("./../Assets/ehgvids/Drawzlegameplay.mp4"))

            }


            {
                contentChunkWithVideo("Epic Hero Game (2021-2023) (unity)", <div>
                    <p>
                        <div className="ehg-highlight-font"></div>
                        {
                            //    is a roguelite/soulslike about a reincarnated superhero who was looking to relax in the afterlife but, due to a certain set of events, ends up helping to save the world from an alien invasion that threatens to destroy it, quite literally.
                        }
                        {/*    <p className='list-paragraph'>Is a roguelite / soulslike built around the idea of ridiculous power scaling anime genre (Dragonball / One Punch Man), where you can always keep getting stronger, you can stack things together, and your appearance changes as you level up, at its core its a parody (why would changing hairstyle make you stronger?, well this game actively tries to lean into that)
          You play as a custom superhero with many absurd build possibilities, and you are saving the world from total destruction... literally!
        </p>
  */}
                        <p className='list-paragraph'>
                            Is a physics based roguelite / soulslike where you play as a superhero and its your job to save the world from an alien invasion where the world is getting totally destroyed!<br></br><br></br>
                            <p className='list-paragraph2'>
                                As you fight through enemies, player gets stronger during the fight (think of tournament of power in Dragon Ball Super)<br></br><br></br>
                                The game uses physics as a backbone for ridiculous anime powerscaling, where you can physically see a difference in the combat, the more stronger you get.
                            </p>
                        </p>
                        <p className='list-paragraph2'>
                            <a href="http://epicherogame.com" className="download-btn">Link to pitch deck</a>
                            <br></br>
                            <br></br>
                            <a href="https://www.youtube.com/watch?v=ias3KT3sFRE" className="download-btn">Gameplay trailer</a>
                            <br></br>
                            <br></br>

                            <a href="https://www.dropbox.com/scl/fi/mpq9mcaykpt2xetg2ac2h/Epic-Hero-Game-0.2.zip?rlkey=gqnj155a6o6yf5cbt2dfrzcq1&raw=1" className="download-btn">Demo Download</a>

                        </p>
                        <p className='list-paragraph2'>
                            This game uses various tools from the Unity Assets store (list below in the technicals section).<br></br>
                            But here is a list of things i programmed / designed for this game
                            <ul>
                                <li>Custom character controller</li>

                                <li>Custom ability system</li>

                                <li>Custom ai system</li>


                                <li>3D Modeling</li>


                            </ul>
                        </p>
                        Takeaways
                        <ul className='list-paragraph2'>
                            <li>Just because i can program something, it doesnt mean it will fit the game.</li>

                            <li>Better understanding of game juice</li>
                            <li>Better understanding of gamedesign</li>
                            <li>Better understanding of how to make fun combat</li>
                            <li>Better understanding of ragdoll physics</li>
                            <li>Better understanding of how 3rd person controllers work</li>

                            <li>An action game should only ever have 1 thing that is moving, either the camera, or the characters, not both.</li>

                            <li>Better understanding how to program gameplay AI</li>

                            <li>Better understanding of shaders</li>
                            <li>Better understanding of how to pace an action game</li>
                            <li><a href='https://lizengland.com/blog/2014/04/the-door-problem/'>Door problem is a very real thing </a></li>
                            <li>Anything that can go wrong, will go wrong</li>
                            <li>Learned how to make video devlogs</li>
                            <li>Less is more</li>

                        </ul>
                        <ul className='list-paragraph2'>
                            I have made few    <a href='https://www.youtube.com/@scuffedgamedev'>video devlogs</a> about the process of building this game
                            <p className='list-paragraph2'>(i have to catch up with devlogs)
                            </p>
                        </ul>
                    </p>


                </div>, require("./../Assets/ehgvids/physicsbasedcombat.mp4"))

            }




















            {

                contentChunk("Epic Hero Game Technicals",


                    <div className='content-wrapper center-div flexbox-wrapper'>

                        <pre className='pre-tag '>
                            <p className='list-paragraph'>
                                <ul>
                                    <li>
                                        <p>Unity 2022</p>
                                    </li>
                                    <li>
                                        <p>Ragdolls: modified PuppetMaster</p>
                                    </li>

                                    <li>
                                        <p>IK: Final IK & foot animator</p>
                                    </li>

                                    <li>
                                        <p>Terrain deformation: Modified digger</p>
                                    </li>

                                    <li>
                                        <p>URP (shadergraph & vfxgraph)</p>
                                    </li>

                                    <li>
                                        <p>Custom built character controller</p>
                                    </li>

                                    <li>
                                        <p>Custom built ability system</p>
                                    </li>
                                </ul>
                            </p>
                            {
                                //technicalsExpanded &&
                                <div>
                                    <p className='list-paragraph2'>
                                        Simplified overview of EHG Code architecture<br></br>
                                        (CLARIFICATION; Entity is not related to unity ECS in any way, its built using GameObjects runtime, just a naming convention)<br></br>
                                        Codebase & tools have been designed with Code First approach, where most of the actual work behind the game is done in code.

                                    </p>
                                    <img className="code-architecture" src={require("./../Assets/ehg-code-diagram.png")}></img>
                                </div>
                            }
                            {
                                /*<div className='btn' onClick={() => {
                                setTechnicalsExpanded(!technicalsExpanded);
                    
                              }}>Read more</div>
                            */
                            }
                        </pre>

                    </div>,
                    //   require("./Assets/ehgvids/9001 round 2.mp4")


                )
            }
            {
/*
                contentChunk("Epic Hero Game Screenshots",
                    <div className='gallery'>{images}</div>
                )
                */
            }
        </div >
    );
}


export default MainPage