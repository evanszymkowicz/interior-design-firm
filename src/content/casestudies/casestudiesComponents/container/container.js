import React from 'react';
import MainGrid from '../mainGrid/mainGrid';
import TrendingStudies from '../trending/trending';
import './_container.scss';

export default function CaseStudiesContainer({
  Card1Status,
  Card2Status,
  Card3Status,
  Card4Status,
  Card5Status,
  Card6Status,
  Card7Status,
  Card8Status,
  ToggleCard1,
  ToggleCard2,
  ToggleCard3,
  ToggleCard4,
  ToggleCard5,
  ToggleCard6,
  ToggleCard7,
  ToggleCard8,
}) {
  return (
    <div className="CaseStudiesContainer">
      <div className="CaseStudiesContainer-Wrapper">

        <MainGrid ToggleCard1={ToggleCard1} ToggleCard2={ToggleCard2} ToggleCard3={ToggleCard3} ToggleCard4={ToggleCard4} ToggleCard5={ToggleCard5} ToggleCard6={ToggleCard6} ToggleCard7={ToggleCard7} ToggleCard8={ToggleCard8} Card1Status={Card1Status} Card2Status={Card2Status} Card3Status={Card3Status} Card4Status={Card4Status} Card5Status={Card5Status} Card6Status={Card6Status} Card7Status={Card7Status} Card8Status={Card8Status} />
        <TrendingStudies />
      </div>
    </div>
  );
}
