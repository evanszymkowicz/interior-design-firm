import React from 'react';
import './Suites.scss';
import SuitesHero from './Hero/SuitesHero';
import InfoBar from './InfoBar/infoBar';
import SuitesHook from './Hook/SuitesHook';
import SuitesImageGrid from './ImageGrid/SuitesImageGrid';
import SuitesInnovations from './Innovations/SuitesInnovations';
import SuitesArtistry from './Artistry/SuitesArtistry';
import SuitesPerformance from './Performance/SuitesPerformance';
import PurchaseBar from '../../../../Recycled/PurchaseBar/PurchaseBar';
import SuitesClosing from './Closing/SuitesClosing';

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
