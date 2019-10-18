import React from 'react';
import PurchaseBar from './Constants/OnlineShopping/OnlineShopping';
import HomeHero from './Hero/HomeHero';
import HomeInfoBar from './InfoBar/HomeInfoBar';
import HomeTabs from './HomeTabs/HomeTabs';
import HomeInsight from './HomeInsights/HomeInsights';
import HomeSeating from './HomeSeating/HomeSeating';
import './home.scss';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-Wrapper">
        <div className="Home-TitleBlock">
          <p className="Home-Title">Home</p>
          <div className="BuyButton">
            <p className="BuyButtonText">Buy Now</p>
          </div>
        </div>
        <HomeHero />
        <HomeInfoBar />
        <HomeTabs />
        <HomeInsight />
        <HomeSeating />
        <PurchaseBar />
      </div>
    </div>
  );
}
