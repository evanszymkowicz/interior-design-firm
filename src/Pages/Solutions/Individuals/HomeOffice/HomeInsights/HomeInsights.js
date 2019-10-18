import React from 'react';
import './homeinsights.scss';

export default function HomeInsights() {
  return (
    <div className="HomeInsights">
      <div className="HomeInsights-Wrapper">
        <p className="HomeInsights-Title">A Range of Spaces</p>
        <div className="HomeInsights-ImagesWrap">
          <div className="HomeInsights-Image HomeInsights-Image1" />
          <div className="HomeInsights-Image HomeInsights-Image2" />
        </div>
        <p className="HomeInsights-Text">With a lightweight, slim profile and one of the smallest footprints - Starck Home 1 performs well in any setting, from collaboration to focus spaces</p>
      </div>
    </div>
  );
}
