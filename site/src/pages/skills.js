
//require('fs');
import React, { useEffect, useState } from 'react';

import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./../Util.js";
function Skills(props) {

    return (





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

    )



}

export default Skills;