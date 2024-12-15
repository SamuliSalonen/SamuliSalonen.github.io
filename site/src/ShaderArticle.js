
//require('fs');
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import me from './Assets/me.png';
import ehgFace from './Assets/emoji.png';
import youtubeLogo from './Assets/youtube.png';
import ehgBackground from './Assets/scr2_upscaled.png';
import twitterLogo from './Assets/Twitter_Logo_Blue.png';
import twitchLogo from './Assets/Glitch_Purple_RGB.png';
import ehgLogo from './Assets/ehglogo.png';
import steamLogo from './Assets/Steam_icon_logo.svg.png';
import maincapsule from './Assets/maincapsule (1).jpg';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Social from './components/social/Social.js';
import Game from './components/game/game.js';
import images from "./images.js";
import MainPage from './MainPage';

import Intro from "./Intro.js";
import { CopyBlock, CodeBlock, dracula } from 'react-code-blocks';
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages } from "./Util.js";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.scss';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
/*
<div class="code-wrapper">

<SyntaxHighlighter language="c#" style={docco}>
    {codeString}
</SyntaxHighlighter>
</div>
*/
const codeString = 'public virtual void Test() {}';
function ShaderArticle(props) {
    return <div className=" ">
        <div className="list-paragraph2">

            <div>
                <p>
                    <b>Shaders</b>
                    <br></br>Can seem little scary at first, because how different it is from "traditional" game engine code, but if you look past the weird code syntax, it's actually very similiar to normal coding.
                    <br></br>It can help to think of a shader as a c# function that just returns colors for every pixel on the screen
                     <br></br>
                </p>
                <div className='code-wrapper'>
                
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class Shader
{
    public Color RenderPixel(Vector2 pixelCoordinate)
    {
        if (pixelCoordinate.x % 2 == 0)
            return Color.white;
        return Color.red;
    }
}}`
                        }
                    </SyntaxHighlighter>
                   <p>
                       Obviously shaders are capable of also modifying geometry, and all that other cool stuff, but this is a good way to get started with them.
                       <br></br>
                       lets take a look at a simple unity UI sprite shader, that i implemented, it modifies the color of the image in a way that you would expect<br></br>
                       instead of just multiplying the color with the image color

                   </p>
                   <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `fixed4 frag(v2f i) : SV_Target
{
    fixed4 texColor = tex2D(_MainTex, i.uv);
    if(texColor.a > _Threshold){
        float luminance = dot(texColor.rgb, float3(0.299, 0.587, 0.114));
        fixed4 transformedColor = fixed4(_ColorTransform.rgb * luminance, _ColorTransform.a);
        return transformedColor;
    }
    else {
        return fixed4(0,0,0,0);
    }
}`
                        }
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>

    </div >
}

export default ShaderArticle