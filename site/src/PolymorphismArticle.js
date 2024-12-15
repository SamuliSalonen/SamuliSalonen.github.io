
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
function PolymorphismArticle(props) {
    return <div className=" ">
        <div className="list-paragraph2">
            <b>Projectile polymorphism</b>
            <div>
                <p>
                    Game development is hard.<br></br>
                    The way you solve hard problems is by breaking the problem into smaller chunks.<br></br>

                    In programming this can be achieved by setting up the object structure first, and use a component based architecture to define behaviour.<br></br>

                    Lets take a look at where this could be implemented.<br></br>
                </p>
                <p>
                    In this article i will be using c# and unity game engine, but this pattern can be implemented in any other object oriented programming language<br></br>
                </p>
                <b>Projectiles are excellent way to do this</b><br></br>
                <p>
                    Technically there is nothing wrong with just having 1 script that defines how projectiles should behave,<br></br> but what if you want the projectile to behave slightly different, in a specific instance?<br></br>
                </p>
                First, our projectile implements component management system, where its possible to attach projectile components into it,<br></br>
                <p>
                    This projectile component then implements couple base methods that we can use to define behaviour<br></br>
                </p>
                OnStart, OnEnd, OnUpdate,<br></br>
                <div className='code-wrapper'>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class ProjectileComponent : MonoBehaviour
{
    public Projectile projectile;
    public virtual void OnStart() { }
    public virtual void OnUpdate() { }

    public virtual void OnEnd() { }
}`
                        }`
                        }
                    </SyntaxHighlighter>
                </div>
                <p>
                    Make sure to mark these components as virtual,<br></br>
                    This is basically telling the compiler that you will be potentially overriding these methods in an inheriting class<br></br>
                </p>
                <p>
                    Everything the projectile can do, should go through these methods, so we can swap components in and out at ease, dont want projectile to move? Just remove the movement component, and boom, job done<br></br>

                    Lets look at how to actually implement these methods:<br></br>
                </p>
                <b>BasicMovementComponent</b><br></br>

                For movement, we need to update the position every frame, for this we override the onupdate method described in the base class, if you want your movement to behave differently, with lets say animatiion curve, you can create another component that overrides the update function the same way<br></br>
                <div className='code-wrapper'>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class BasicMovementComponent : ProjectileComponent
{
    public float speed = 10;
    public override void OnUpdate()
    {
        base.OnUpdate();

        transform.position += transform.forward * speed * Time.deltaTime;
    }
}`
                        }
                    </SyntaxHighlighter>
                </div>
                <b>CollisiondetectionComponent</b><br></br>
                <p> For collision detection, we also need to perform compution every frame, here is an example how to implement basic raycast collision detection,<br></br>
                    If you want to detect a bigger area, you can override this component, and use overlap sphere instead,<br></br>
                    When collision is detected.<br></br></p>
                <div className='code-wrapper'>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class CollisionDetectionComponent : ProjectileComponent
{
    public LayerMask layerMask;
    public override void OnUpdate()
    {
        base.OnUpdate();


    }
    
    void Raycast(Vector3 start, Vector3 end)
    {
        if (Physics.Raycast(start, (end - start).normalized,
         out var hit, Vector3.Distance(start, end), layerMask))
        {
            projectile.DetectHit(hit);
        }
    }
}`
                        }
                    </SyntaxHighlighter>
                </div>

                <p>
                    It will call a function in the projectile, that tells all the components that a collision just occured,<br></br>
                    There are many ways to achieve this same pattern, but for simplicitys sake, in this article i will be invoking a method on the projectile directly<br></br>

                    <p>

                    </p>
                </p>

                <p>
                    <b>ExplosionComponent</b><br></br>
                    Explosion component is the simplest, it simply spawns a gameobject when it receives the oncollision event
                    <br></br>
                    <SyntaxHighlighter language="c#" style={docco}>
                        {
                            `public class ExplosionComponent : ProjectileComponent
{
    public GameObject prefab;

    public override void OnHit(RaycastHit hit)
    {
        MonoBehaviour.Instantiate(prefab, hit.point, prefab.transform.rotation);
    }
}`
                        }
                    </SyntaxHighlighter>
    
                </p>
                TODO: continue
                <br></br>
            </div>
        </div>

    </div >
}

export default PolymorphismArticle