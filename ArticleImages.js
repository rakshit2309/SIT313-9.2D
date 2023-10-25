import React from 'react';
import './ArticleImages.css';
import ArticleName from './ArticleName';
import ArticleDescription from './ArticleDescription';
import ArticleContent from './ArticleContent';
import {faker} from '@faker-js/faker'
const articleData = [
  {
    name: 'Image 1',
    description: 'description 1 sbhfb wdbrweh bwh ehfbweh hebfewh whb whfw h weh f',
    author: faker.name.firstName(),
    imageURL: faker.image.url(),
  },
  {
    name: 'Image 2',
    description: 'description 2 f dhfd bfhifbr gbehge fbrjfb  wrjbfrfb',
    author: faker.name.firstName(),
    imageURL: faker.image.url()
  },
  {
    name: 'Image 3',
    description: 'description 3. sdfb  hwbefiweb  whbfewib ew whfweyif yeifbeiw i weibf',
    author: faker.name.firstName(),
    imageURL: faker.image.url()
  },
 
];

const ArticleImages = () => {
  return (
    <>
      <div className="article-images">
        {articleData.map((article, index) => (
          <div key={index} className="image-container">
            <img src={article.imageURL} alt={article.name} className="small-image" />
            <ArticleName name={article.name} />
            <ArticleDescription description={article.description} />
            <hr />
            <ArticleContent author={article.author} />
          </div>
        ))}
      </div>
      <div className="see-all-container">
        <button className="see-all-button">See All Articles</button>
      </div>

      {/* TUTORIALS
      <h2 className="featured-title">FEATURED TUTORIALS</h2>
      <div className="article-images">
        {articleData.map((article, index) => (
          <div key={index} className="image-container">
            <img src="/deakin1.jpg" alt={article.name} className="small-image" />
            <ArticleName name={article.name} />
            <ArticleDescription description={article.description} />
            <hr />
            <ArticleContent author={article.author} />
          </div>
        ))}
      </div>
      <div className="see-all-container">
        <button className="see-all-button">See All tutorials</button>
      </div> */}
    </>
  );
};

export default ArticleImages;
