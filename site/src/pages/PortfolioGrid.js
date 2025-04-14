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
  const videos = props.videos;
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
          video.thumbnail && <img className='thumbnail'src={video.thumbnail}    onClick={() => {
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
