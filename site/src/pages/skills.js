
//require('fs');
import React, { useEffect, useState } from 'react';

import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";
function Skills(props) {

    return (


        <div>
            {

                contentChunk("List of skills",
                    <div>
                        <div className='content-wrapper center-div flexbox-wrapper'>
                            <div className='pre-tag flexbox-content'>

                                <p  className='list-paragraph2'>C# and unity is where my strongest tech knowledge is,<br></br> but my biggest strength is being able to use my existing knowledge  into learning new things
                                </p>
                            </div>

                        </div>
                        <div className='content-wrapper center-div flexbox-wrapper'>
                            <div className='pre-tag flexbox-content'>

                                <div>
                                    <div className='tech-icons'>
                                        <img className='tech-icon' src={require("../Assets/tech/csharp.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/unity.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/js.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/react.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/angular.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/redux.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/css3.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/unreal.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/godot.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/blender.svg").default}></img>
                                        <img className='tech-icon' src={require("../Assets/tech/sql.svg").default}></img>

                                    </div>
                                    <ul className='list-paragraph2'>

                                        <li>Photon PUN (network engine for unity) </li>

                                        <li>Mirror (network engine for unity) </li>

                                        <li>Puppet Master (ragdoll engine for unity) </li>

                                        <li>Final IK (Inverse kinematics library for unity) </li>
                                        <li>Digger (Voxel engine for unity) </li>
                                        <li>Unity shadergraph </li>
                                        <li>Unity Job system basics </li>






                                        <li>OAuth implementation experience (auth0, twitter, twitch, discord)</li>


                                        <li>C# ASP.net</li>
                                        <li>mssql</li>
                                        <li>Git</li>
                                        <li>Unreal 5 basics </li>
                                        <li>C++ Basics</li>

                                        <li>PHP</li>
                                        <li>Python basics</li>
                                        <li>Tensorflow basics</li>
                                        <li>Linux basics</li>
                                        <li>Windows server admin</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                )



            }
        </div>
    )
}

export default Skills;