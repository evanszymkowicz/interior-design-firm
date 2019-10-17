import React from 'react';
import './_trending.scss';

export default function TrendingStudies() {
  return (
    <div className="TrendingStudies">
      <div className="TrendingStudies-Wrapper">

        <p className="TrendingStudies-Title">Trending</p>

        <div className="TrendingStudies-Card">
          <div className="TrendingStudies-CardImage TrendingStudies-CardImage1" />
          <div className="TrendingStudies-CardTextBox">
            <p className="TrendingStudies-CardCategory">Workplace</p>
            <p className="TrendingStudies-CardTitle">Driving Culture Change at NameLogo HQ</p>
          </div>
        </div>

        <div className="TrendingStudies-Card">
          <div className="TrendingStudies-CardImage TrendingStudies-CardImage2" />
          <div className="TrendingStudies-CardTextBox">
            <p className="TrendingStudies-CardCategory">Active Learning</p>
            <p className="TrendingStudies-CardTitle">Active Learning Center Grant Launches Fifth Cycle</p>
          </div>
        </div>

        <div className="TrendingStudies-Card">
          <div className="TrendingStudies-CardImage TrendingStudies-CardImage3" />
          <div className="TrendingStudies-CardTextBox">
            <p className="TrendingStudies-CardCategory">Well being</p>
            <p className="TrendingStudies-CardTitle">New Office</p>
          </div>
        </div>

        <div className="TrendingStudies-Card">
          <div className="TrendingStudies-CardImage TrendingStudies-CardImage4" />
          <div className="TrendingStudies-CardTextBox">
            <p className="TrendingStudies-CardCategory">Workplace</p>
            <p className="TrendingStudies-CardTitle">Starck and Microsoft: Bridge the Creative Gap</p>
          </div>
        </div>

      </div>
    </div>
  );
}
