import React from 'react';
import './ArticleDescription.css'; 

const ArticleDescription = ({ description }) => {
  return (
    <p className="image-description">{description}</p>
  );
};

export default ArticleDescription;
