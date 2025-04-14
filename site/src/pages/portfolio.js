
//require('fs');
import React, { useEffect, useState, useRef } from 'react';
import PortfolioGrid from './PortfolioGrid.js';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages, TechIcons } from "./../Util.js";
import videos from "./videos";
const YouTubeEmbed = (props) => {
    return (
        <div className='youtube-embed'>

            <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + props.id}  // Replace with your YouTube video ID
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            ></iframe>
        </div>
    );
};

function Portfolio(props) {
    const [isAbsolute, setIsAbsolute] = useState(false);
    const scrollThreshold = 1400; // Adjust this as needed

    const videoRef = useRef(null);
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {
                setIsAbsolute(true);
            } else {
                setIsAbsolute(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div>
            {
                contentChunk("Portfolio",

                    <div className='portfolio-wrapper'>

                        <PortfolioGrid videos={videos} onSelectVideo={(video) => {

                            setSelectedVideo(video);
                            if (videoRef.current) {
                                videoRef.current.load(); // Optional: reload video source
                                videoRef.current.play();
                            }
                        }}></PortfolioGrid>
                        <div className='right' style={{
                            position: isAbsolute ? "absolute" : "fixed",
                            top: isAbsolute ? `${scrollThreshold + 70}px` : "",
                        }}>

                            <video ref={videoRef} autoplay={true} controls>
                                {
                                    selectedVideo && selectedVideo.video && <source src={selectedVideo.video} type="video/mp4" />

                                }

                            </video>
                            {
                                selectedVideo && <TechIcons techList={selectedVideo.tech} />
                            }
                            {selectedVideo && <div
                                style={{
                                    position: 'absolute',
                                    top: '10px', // adjust as needed
                                    left: '10px', // adjust as needed
                                    color: 'white',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // optional for better readability
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                }}
                            >
                                {selectedVideo.title}
                            </div>
                            }
                            {
                                selectedVideo && (
                                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                                        {
                                            selectedVideo.link && <a href={selectedVideo.link}>{selectedVideo.link}</a>
                                        }

                                        <h4 style={{ marginBottom: '0.5rem', }}>Description</h4>
                                        <p style={{ color: '#555', lineHeight: '1.6' }}>
                                            {selectedVideo.description}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }

            {
                contentChunk("Highlights",

                    <div className='portfolio-wrapper disable-flex'>
                        {
                            contentChunk("Epic Hero Game ", <div >
                                <div className='content-wrapper'>

                                    <pre className='pre-tag-full'>
                                        <div className="block-wrapper">
                                            <YouTubeEmbed id={"3YEILWFpsxg"}></YouTubeEmbed>
                                            <div className="pre-block">

                                                <p className='list-paragraph'>
                                                    Epic Hero Game is a roguelite soulslike
                                                    <br></br><a href={"https://store.steampowered.com/app/2081720/Epic_Hero_Game/"}>Steam</a>
                                                    <p className='list-paragraph2'>
                                                        <ul>
                                                            <li>Main Project</li>

                                                            <li>Very flexible codebase with tons of features</li>
                                                            <li>Physics-based character controller</li>
                                                            <li>Custom Ability system</li>
                                                            <li>Custom projectile system</li>
                                                            <li>Custom interaction system</li>

                                                            <li>Custom physics-based animation</li>
                                                            <li>Custom combat system</li>

                                                            <li>Combat looks different based on player progression</li>
                                                            <li>Destructable environment</li>
                                                            <li>Was featured on Hectic Sherlock Gaming youtube channel,<br></br> with 7.1 million views, as of writing this.</li>
                                                            <li><a href='https://store.steampowered.com/app/2081720/Epic_Hero_Game/'>https://store.steampowered.com/app/2081720/Epic_Hero_Game/</a></li>
                                                        </ul>
                                                    </p>

                                                </p>
                                            </div>
                                        </div>
                                    </pre>


                                </div>
                            </div>)

                        }
                        {
                            contentChunkWithVideo("Chat Ragdoll Racing", <div >

                                <p className='list-paragraph'>
                                    Chat Ragdoll Racing is a twitch integration game
                                    <br></br><a href={"https://store.steampowered.com/app/3511350/Chat_Ragdoll_Racing/"}>Steam</a>
                                    <p className='list-paragraph2'>
                                        <ul>
                                            <li>similiar to marbles, but with ragdolls</li>
                                            <li>procedural ragdoll animation</li>
                                            <li>twitch api integration in unity</li>

                                            <li>flexible obstacle system</li>

                                        </ul>
                                    </p>

                                </p>





                            </div>, require("./../Assets/ehgvids/crr-gameplayer.mp4"))

                        }
                        {
                            contentChunkWithVideo("Bomb around", <div >

                                <p className='list-paragraph'>
                                    Physics based rage game inspired by jump king and other foddian games.
                                    <br></br><a href={"https://store.steampowered.com/app/3539690/Bomb_Around/"}>Steam</a>
                                    <p className='list-paragraph2'>
                                        <ul>
                                            <li>Integrated effects and other gamefeel improvements</li>


                                        </ul>
                                    </p>

                                </p>





                            </div>, require("./../Assets/ehgvids/bombaround.mp4"))

                        }
                        {
                            contentChunkWithVideo("Golemz (2024)", <div >



                                <p className='list-paragraph'>
                                    Golemz is a worms clone in 3d
                     
                                    <br></br><img className='award' src={require("./../Assets/jernjam6.png")}></img>
                                    <br></br>        <a href='https://samuli-salonen.itch.io/golemz'>Build</a>
                                    <p className='list-paragraph2'>
                                        <ul>
                                            <li>Photon multiplayer</li>
                                            <li>IK that blends first person weapon animations into third person character</li>
                                            <li>vast selection of weapons</li>
                                            <li>Built in 2 weeks for a gamejam (jernjam 3)</li>
                                            <li>Teamlead of 4</li>
                                            <li>(clip is the gamejam host playing the game with us)</li>

                                        </ul>
                                    </p>

                                </p>





                            </div>, require("./../Assets/ehgvids/golemz.mp4"))

                        }
                    </div>)
            }



        </div>
    )


}

export default Portfolio