import React from 'react';
import './clip.css';

const Clip = ({ clip }) => {
  return (
    <div className="clip-card">
      <div className="clip-header">
        <h3 className="clip-title">{clip.title}</h3>
        <div className="rating-container">
          <img src={clip.start} alt="Rating" className="rating-stars" />
        </div>
      </div>
      <p className="clip-description">{clip.description}</p>
      <div className="video-container">
        <video controls width="100%">
          <source src={clip.source_clip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Clip;