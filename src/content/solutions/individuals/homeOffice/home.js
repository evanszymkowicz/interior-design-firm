import React from 'react';
import HomeHero from './hero/homeHero';
import HomeInfoBar from './infoBar/infoBar';
import HomeTabs from './homeTabs/homeTabs';
import HomeInsight from './homeInsights/homeInsights';
import HomeSeating from './homeSeating/homeSeating';
import PurchaseBar from './features/onlineShopping/onlineShopping';
import './_home.scss';

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
