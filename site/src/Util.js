import React, { useEffect, useState } from 'react';


export const contentChunk = (title, input) => {
    return (
        <div className='content-chunk'>
            {
                title && <h3 className='content-chunk-text'><b>{title}</b></h3>
            }
            {input}
            <hr></hr>
        </div>);
};

export const contentChunkWithVideo = (title, input1, vid) => {
    return contentChunk(title,
        <div className='content-wrapper'>

            <pre className='pre-tag-full'>
                <div className="block-wrapper">
                    <div className="pre-block">
                        <video width="640" height="360" controls autoplay>
                            <source src={vid} type="video/mp4" />

                        </video>
                    </div>
                    <div className="pre-block">
                        {input1}
                    </div>
                </div>
            </pre>

        </div>
    )
}

export const getTechIcon = (tech) => {
    const techIcons = {
      "C#": require("./Assets/tech/csharp.svg").default,
      "Unity3D": require("./Assets/tech/unity.svg").default,
      "JavaScript": require("./Assets/tech/js.svg").default,
      "React": require("./Assets/tech/react.svg").default,
      "Angular": require("./Assets/tech/angular.svg").default,
      "Redux": require("./Assets/tech/redux.svg").default,
      "CSS3": require("./Assets/tech/css3.svg").default,
      "Unreal Engine": require("./Assets/tech/unreal.svg").default,
      "Godot": require("./Assets/tech/godot.svg").default,
      "Blender": require("./Assets/tech/blender.svg").default,
      "SQL": require("./Assets/tech/sql.svg").default,
    };
  
    return techIcons[tech] || null;
  };
  
  export const TechIcons = ({ techList }) => {
      if(!techList)
      return;
    return (
      <div className="tech-icons">
        {techList.map((tech, index) => {
          const iconSrc = getTechIcon(tech);
          return iconSrc ? (
            <img key={index} className="tech-icon" src={iconSrc} alt={tech} />
          ) : null;
        })}
      </div>
    );
  };

export const simpleListItem = (title, description) => {
    return <li><p className='list-title'>{title}</p> <p className='list-paragraph'>{description}</p></li>

};

export const simpleListItemP = (title, description) => {
    return <p><p >{title}</p> <p className='list-paragraph'>{description}</p></p>

};

export const renderArray = (array) => {
    let output = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        output.push(element);
    }

    return output;
}

export const contentChunkWithImages = (title, input1, img1, img2) => {
    return contentChunk(title,
        <div className='content-wrapper'>
            {
                //     <img className="monster-img" src={fetchMonsterImage(img1)}></img>
            }
            <pre className='pre-tag'>
                {input1}
            </pre>
            {
                //<img className="monster-img" src={fetchMonsterImage(img2)}></img>
            }
        </div >
    )
}

