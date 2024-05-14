import React from "react";
import { YOUTUBE_API } from "../utils/contants";
const VideoCard = ({ info }) => {
 
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(YOUTUBE_API)
  return (
    <div className="p-2 m-2 w-[17rem] shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        
      </ul>
    </div>
  );
};

export default VideoCard;