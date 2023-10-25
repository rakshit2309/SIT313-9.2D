import React from 'react';
import Navbar from './Navbar';
import CoverImage from './CoverImage';
import ArticleImages from './ArticleImages';
import TutorialImages from './TutorialImages';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Footer2 from './Footer2';

const Home = () => {
  return (
    <div>
      <Navbar />
      <CoverImage />
      <ArticleImages />
      <TutorialImages />
      <Navbar2 />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Home;
