import React from 'react';
import LandingHero from './LandingComponents/Hero/Hero';
import WhatsNew from './LandingComponents/WhatsNew/WhatsNew';
import Featured from './LandingComponents/Featured/Featured';
import CaseStudies from './LandingComponents/CaseStudies/CaseStudies';
import News from './LandingComponents/News/News';
import './landing.scss';

export default function LandingPage() {
  return (
    <div className="Landing">
      <div className="Landing-Wrapper">
        <LandingHero />
        <WhatsNew />
        <Featured />
        <CaseStudies />
        <News />
      </div>
    </div>
  );
}
