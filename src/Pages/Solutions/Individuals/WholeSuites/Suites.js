import React from 'react';
import PurchaseBar from './Constants/OnlineShopping/OnlineShopping';
import SuitesHero from './Hero/SuitesHero';
import InfoBar from './InfoBar/InfoBar';
import SuitesHook from './Hook/SuitesHook';
import SuitesImageGrid from './ImageGrid/SuitesImages';
import SuitesInnovations from './Innovations/SuitesInnovations';
import SuitesArtistry from './Artistry/SuitesArtistry';
import SuitesPerformance from './Performance/SuitesPerformance';
import SuitesClosing from './Closing/SuitesClosing';
import './suites.scss';

export default function Suites() {
  return (
    <div className="Suites">
      <div className="Suites-Wrapper">
        <div className="Suites-TitleBlock">
          <p className="Suites-Title">Suites</p>
          <div className="BuyButton SuitesBuyButton">
            <p className="BuyButtonText">Buy Now</p>
          </div>
        </div>
        <SuitesHero />
        <InfoBar />
        <SuitesHook />
        <SuitesImageGrid />
        <SuitesInnovations />
        <SuitesArtistry />
        <SuitesPerformance />
        <SuitesClosing />
        <PurchaseBar />
      </div>
    </div>
  );
}
