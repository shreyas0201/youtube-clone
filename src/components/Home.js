import React, { useState, useEffect } from 'react';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('https://internship-service.onrender.com/videos?page=0');
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.log('Error fetching videos:', error);
    }
  };

  return (
    <div>
      <h1>YouTube Clone</h1>
      <div>
        {videos.map((video) => (
          <div key={video.id}>
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
