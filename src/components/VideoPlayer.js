import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { videoId } = useParams();

  return (
    <div>
      <h1>Video Player</h1>
      <div>
        <h3>Video ID: {videoId}</h3>
        {/* Use HTML5 video or react-player to play the video */}
      </div>
    </div>
  );
};

export default VideoPlayer;
