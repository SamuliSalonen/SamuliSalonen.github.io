
//require('fs');
import React, { useEffect, useState } from 'react';

import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";
function Portfolio(props) {
    return (

        <div>
            {
                contentChunkWithVideo("Epic Hero Game (2021-present) (unity)", <div >
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
                            This is ongoing dream project for me, and it has gone through multiple iterations, here are the major products i created for this project:
                            <ul>
                                <li>Custom character controller</li>

                                <li>Custom animation system that blends IK and Physics animation</li>

                                <li>Custom Upgrade system</li>

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
                contentChunkWithVideo("Golemz (2024)", <div >
                    <p>
                        <div className="ehg-highlight-font"></div>
                     
                        <p className='list-paragraph'>
                            Golemz is a worms clone in 3d
                            <p className='list-paragraph2'>
                                <ul>
                                    <li>Photon multiplayer</li>
                                    <li>IK that blends first person weapon animations into third person character</li>
                                    <li>vast selection of weapons</li>
                                    <li>Built in 2 weeks for a gamejam</li>
                                    <li>Teamlead of 4</li>
                                    <li>(clip is the gamejam host playing the game with us)</li>

                                    <li>Won #1 overrall jern's choice award</li>
                                    <a href='https://samuli-salonen.itch.io/golemz'><li>Build</li></a>
                                </ul>
                            </p>

                        </p>
                        <img className='award' src={require("./../Assets/jernjam6.png")}></img>

                    </p>


                </div>, require("./../Assets/ehgvids/golemz.mp4"))

            }
  {
                contentChunkWithVideo("Stream overlay ragdoll fighter (2023)", <div >
                    <p>
                        <div className="ehg-highlight-font"></div>
                     
                        <p className='list-paragraph'>
                            Physics based ragdoll fighting game that renders on top of your screen
                            <p className='list-paragraph2'>
                                <ul>
                                    <li>Unity twitch chat integration</li>
                                
                                    <li>Ragdoll physics</li>
                                
                                </ul>
                            </p>

                        </p>
                       
                    </p>


                </div>, require("./../Assets/ehgvids/onscreen.mp4"))

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




        </div>
    )


}

export default Portfolio