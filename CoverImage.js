import React from 'react';
import './CoverImage.css';

const CoverImage = () => {
  return (
    <div className="cover-image-container">
      <img
        src="/deakin1.jpg" // Replace with the actual image path
        alt="Cover"
        className="cover-image"
      />
       <h2 className="featured-title">FEATURED ARTICLES</h2>
    </div>
  );
};

export default CoverImage;
