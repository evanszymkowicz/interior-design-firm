import React from 'react';
import './_Landing.scss';
import LandingHero from './landingComponents/hero/hero';
import WhatsNew from './landingComponents/whatsNew/whatsNew';
import Featured from './landingComponents/featured/featured';
import CaseStudies from './landingComponents/caseStudies/caseStudies';
import News from './landingComponents/news/news';

export default function LandingPage() {
  return (
    <div className='Landing'>
      <div className='Landing-Wrapper'>
        <LandingHero />
        <WhatsNew />
        <Featured />
        <CaseStudies />
        <News />
      </div>
    </div>
  )
}
