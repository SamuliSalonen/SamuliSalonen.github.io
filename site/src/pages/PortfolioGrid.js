/**
 * PortfolioGrid with error handling and safety checks, using regular divs.
 */
import { filterProps } from "framer-motion";
import React, { useState } from "react";
import "./../components/PortfolioGrid.scss";
import { contentChunk, contentChunkWithVideo, simpleListItem, simpleListItemP, renderArray, contentChunkWithImages, getTechIcon, TechIcons } from "./../Util.js";
const portfolioItems = [
  {
    id: 1,
    title: "Project One",
    videoUrl: "./../Assets/ehgvids/physicsbasedcombat.mp4",
    thumbnail: "/thumbnails/thumb1.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    videoUrl: "./../Assets/ehgvids/physicsbasedcombat.mp4",
    thumbnail: "/thumbnails/thumb2.jpg",
  },
  // Add more items as needed
];



const PortfolioGrid = (props) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const closeModal = () => setSelectedVideo(null);

  // Create a 9x9 grid using nested loops
  const rows = 20;


  const grid = [];
  const videos = [];
  /*
  videos.push({
    video: require("./../Assets/ehgvids/physicsbasedcombat.mp4"),
    title: "Physics-Based Combat",
    description: "Showcasing dynamic physics-based combat mechanics for immersive gameplay."
  });
  */
  /*
   videos.push({
     video: require("./../Assets/ehgvids/onscreen.mp4"),
     title: "On-Screen Action",
     description: "Highlights real-time action elements and responsive user interface interactions."
   });
   */
  videos.push({
    video: require("./../Assets/ehgvids/physics_upgrade2.mp4"),
    thumbnail: require("./../Assets/thumbnails/ehg1.png"),
    title: "Thirdperson Physics Character Controller",
    description: "Demonstration of smooth active ragdoll physics with precise tracking, while maintaining accurate physics state relative to the rendered skeleton",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });

  videos.push({
    video: require("./../Assets/ehgvids/blueskyasms.mp4"),
    title: "Combat system with procedural hit reactions",
    thumbnail: require("./../Assets/thumbnails/ehg2.png"),
    description: "The target skeleton gets twisted by the amount of power the player uses, and it stacks on top of each other<br>",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });

  videos.push({
    video: require("./../Assets/ehgvids/Chat_Ragdoll_Racing_LV0JyKtBWY (1).mp4"),
    title: "Unity Job System Ragdoll control",
    thumbnail: require("./../Assets/thumbnails/crr1.png"),
    description: "Scaled up to hundreds of characters using unity job system",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });

  videos.push({
    video: require("./../Assets/ehgvids/twitchapi.mp4"),
    title: "Twitch API integration",
    thumbnail: require("./../Assets/thumbnails/crr2.png"),
    description: "Integrating Twitch API into unity game engine",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });


  /*
    videos.push({
      video: require("./../Assets/ehgvids/physics-anim.mp4"),
      title: "Physics based monster animation",
      description: "",
      category: "Feature",
      tech: ["Unity3D", "C#"]
    });
  */

  videos.push({
    video: require("./../Assets/ehgvids/crr-gameplayer.mp4"),
    thumbnail: require("./../Assets/thumbnails/crr3.png"),
    title: "Chat Ragdoll Racing",
    description: "Chat Ragdoll Racing is fully physics-based ragdoll animated simulation game where Twitch Streamers can host games for their communities and have people race against each other in a wild physics-based world,<br> played by my friend Sciants_Streams",
    category: "Game",
    tech: ["Unity3D", "C#"],
    link: "https://store.steampowered.com/app/3511350/Chat_Ragdoll_Racing/"
  });
  videos.push({
    video: require("./../Assets/ehgvids/free4owl.mp4"),
    thumbnail: require("./../Assets/thumbnails/free4owl.png"),
    title: "Free 4 owl",
    description: "The game is Simple ! Search your lab for the missing parts to fix your experiment. But BEWARE!!! your pesky cat will be causing HAVOC so hurry before the time expires! its an Owl lot of fun im telling yhooooot",
    category: "Game",
    tech: ["Unreal Engine"],
    link: "https://blackmageuk.itch.io/jernjam2"
  });

  videos.push({
    video: require("./../Assets/ehgvids/9001 round 2.mp4"),
    thumbnail: require("./../Assets/thumbnails/9001.png"),
    title: "Destructable Terrain",
    description: "Juicy punch with destructable environment",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });

  videos.push({
    video: require("./../Assets/ehgvids/golemz.mp4"),
    title: "Online multiplayer + Weapon system",
    thumbnail: require("./../Assets/thumbnails/golemz.png"),
    description: "Demonstration of online multiplayer implementation using photon PUN,<br> played by my friend IrishJohnGames",
    category: "Feature",
    tech: ["Unity3D", "C#"],
    link: "https://samuli-salonen.itch.io/golemz"
  });
  /*
  videos.push({
    video: require("./../Assets/ehgvids/Serpentine Survivors jam trailer.mp4"),
    title: "Serpentine Survivors",
    description: "Reverse vampire survivors-like roguelite where a snake chases moving targets while not trying to die of hunger.",
    category: "Game",
    tech: ["Godot"],
    link:"https://samuli-salonen.itch.io/serpentinesurvivors"
  });
*/
  videos.push({
    video: require("./../Assets/ehgvids/localization.mp4"),
    thumbnail: require("./../Assets/thumbnails/local.png"),
    title: "Localization system",
    description: "Implementing Unity Localization system, that automatically changes the text in all affected game objects to the selected language",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });


  videos.push({
    video: require("./../Assets/ehgvids/explosion.mp4"),
    thumbnail: require("./../Assets/thumbnails/destr.png"),
    title: "Destructable Props",
    description: "Demonstration of physically fracturing environmental props",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });
  videos.push({
    video: require("./../Assets/ehgvids/Drawzlegameplay.mp4"),
    thumbnail: require("./../Assets/thumbnails/drawzle.png"),
    title: "2D Physics based puzzle drawing game",
    description: "Physics-based puzzle game where the problems are solved by drawing on the screen",
    category: "Game",
    tech: ["Unity3D", "C#"],
    link: "https://samuli-salonen.itch.io/drawzle"
  });

  videos.push({
    video: require("./../Assets/ehgvids/physics-animation.mp4"),
    thumbnail: require("./../Assets/thumbnails/physicsanim.png"),
    title: "UnityEditor tool to create custom physics animations",
    description: "UnityEditor tool to create custom physics animations",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });
  videos.push({
    video: require("./../Assets/ehgvids/argolf.mov"),
    title: "Augmented Reality Mobile Golf game",
    thumbnail: require("./../Assets/thumbnails/argolf.png"),
    description: "Augmented Reality Implemented with ARCore on android phone",
    category: "Prototype",
    tech: ["Unity3D", "C#"]
  });



  videos.push({
    video: require("./../Assets/ehgvids/bombaround.mp4"),
    thumbnail: require("./../Assets/thumbnails/bombaround.png"),
    title: "Bomb Around",
    description: "Rage game similiar to Getting Over it, where you want to climb as high as possible",
    category: "Game",
    tech: ["Unity3D", "C#"],
    link: "https://store.steampowered.com/app/3539690/Bomb_Around/"
  });

  videos.push({
    video: require("./../Assets/ehgvids/scuffed-brawler-game_VIBaIbDWrG.mp4"),
    thumbnail: require("./../Assets/thumbnails/skins.png"),
    title: "Character skin system",
    description: "Character skins tied to user profiles that get loaded when the game starts",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  }); videos.push({
    video: require("./../Assets/ehgvids/2019-06-13_16-52-48.mp4"),
    title: "Mobile game infinite scroller",
    thumbnail: require("./../Assets/thumbnails/mobilescroll.png"),
    description: "Avoid asteroids and go as high as possible, game is controlled by reading the phone tilt",
    category: "Prototype",
    tech: ["Unity3D", "C#"]
  });
  videos.push({
    video: require("./../Assets/ehgvids/comboarcher.mp4"),
    title: "Mobile archer game",
    thumbnail: require("./../Assets/thumbnails/mobilescroll2.png"),
    description: "Archery game where you want to pop as many balloons as possible",
    category: "Prototype",
    tech: ["Unity3D", "C#"]
  });
  videos.push({
    thumbnail: require("./../Assets/thumbnails/basebuild.png"),
    video: require("./../Assets/ehgvids/buildingsystem.mp4"),
    title: "Building system",
    description: "Building placement system that uses a shader to animate the building process",
    category: "Feature",
    tech: ["Unity3D", "C#"]
  });


  videos.push({
    thumbnail: require("./../Assets/thumbnails/convict.png"),
    video: require("./../Assets/ehgvids/convict-run.mp4"),
    title: "Convict run",
    description: "With Promise of a fresh Start at the end of the Level, get your convict to the end while avoiding all the inconveniences with hilarious commentary and physics defiant controls allow the fun to consume your very being",
    category: "Prototype",
    tech: ["Unity3D", "C#"],
    link: "https://samuli-salonen.itch.io/convict-run"
  });
  videos.push({
   
    thumbnail: require("./../Assets/thumbnails/onscreen.png"),
    video: require("./../Assets/ehgvids/onscreen.mp4"),
    title: "Game running on top of windows desktop",
    description: "Twitch chat integrated game that is running on top of user desktop",
    category: "Prototype",
    tech: ["Unity3D", "C#"],

  });
  videos.push({
    thumbnail: require("./../Assets/thumbnails/golf.png"),
    video: require("./../Assets/ehgvids/onlinegolf.mp4"),
    title: "Multiplayer golf gameplay",
    description: "Multiplayer golf implementation",
    category: "Feature",
    tech: ["Unity3D", "C#"],

  });
  videos.push({
    thumbnail: require("./../Assets/thumbnails/knw.png"),
    video: require("./../Assets/ehgvids/knightwarriors.mp4"),
    title: "Knight warriors",
    description: "3d Infinite runner prototype with character selection",
    category: "Prototype",
    tech: ["Unity3D", "C#"],

  });
  videos.push({
    thumbnail: require("./../Assets/thumbnails/bottle.png"),
    video: require("./../Assets/ehgvids/bottleflip.mp4"),
    title: "Bottle Flip AR",
    description: "Augmented reality implementation with ARCore where players try to land bottles on surfaces",
    category: "Prototype",
    tech: ["Unity3D", "C#"],

  });
  for (let i = 0; i < videos.length; i++) {

    let video = videos[i];
    if (!video)
      continue;
    if (!video.video)
      continue;
    grid.push(
      <div className="cell">
        {
          !video.thumbnail &&     <video
                src={video.video}
                onClick={() => {
                  if (props.onSelectVideo) props.onSelectVideo(video);
                }}
                style={{ width: '100%', display: 'block' }}
              ></video>
        
        }
        {
          video.thumbnail && <img src={video.thumbnail}    onClick={() => {
            if (props.onSelectVideo) props.onSelectVideo(video);
          }}></img>
        }
        <div
          className="absolute-box"
        >
          <span
            style={{
              fontSize: "1.2em",
              fontWeight: "bold",
              color: video.category === "Feature"
                ? "orange"
                : video.category === "Prototype"
                  ? "red"
                  : "green"
            }}
          >
            {video.category}
          </span> {video.title}


        </div>
        <div
          className="absolute-box-2"
        >
          <span><TechIcons techList={video.tech} /></span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid">
      {grid}
    </div>
  );
};

export default PortfolioGrid;
