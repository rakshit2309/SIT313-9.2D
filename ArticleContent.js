// ArticleContent.js
import React from 'react';
import './ArticleContent.css'; // Import the corresponding CSS

const ArticleContent = ({ line1, line2, line3, author }) => {
  return (
    <div className="article-content">
      <div className="content-line">{line1}</div>
      <div className="content-line">{line2}</div>
      <div className="content-line">{line3}</div>
      <div className="author-name">
        
        <img src="/star.png" alt="Star" className="star-icon" />
        <span className="star-number">5</span>
        {author}
      </div>
    </div>
  );
};

export default ArticleContent;
