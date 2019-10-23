import React from 'react';
import './gestureplanning.scss';

export default function GesturePlanning() {
  return (
    <div className="GesturePlanning">
      <div className="GesturePlanning-Wrapper">
        <p className="GesturePlanning-Title">Collections</p>
        {/* <div className="GesturePlanning-Button">
          <p className="GesturePlanning-ButtonText">All Gesture Planning Ideas</p>
          <div className="GesturePlanning-ButtonIcon" />
        </div> */}
        <div className="GesturePlanning-CardWrap">
          <div className="GesturePlanning-Card">
            <div className="GesturePlanning-CardImage GesturePlanning-CardImage1" />
            <div className="GesturePlanning-CardTextBox">
              <p className="GesturePlanning-CardTitle">Sue Firestone</p>
              <p className="GesturePlanning-CardText">Sue felt most at home and alive when immersed in nature. It was in that maiden journey in 1976 that Sue was first exposed to new corners of the earth, and found herself inspired and completely in tune with the power and beauty of nature.</p>
            </div>
          </div>
          <div className="GesturePlanning-Card">
            <div className="GesturePlanning-CardImage GesturePlanning-CardImage2" />
            <div className="GesturePlanning-CardTextBox">
              <p className="GesturePlanning-CardTitle">Jeff Andrews</p>
              <p className="GesturePlanning-CardText">Known for creating sophisticated and livable interiors, jeff takes bold design concepts, infuses them with warmth, sophistication, and most importantly, a sense of home.</p>
            </div>
          </div>
          <div className="GesturePlanning-Card">
            <div className="GesturePlanning-CardImage GesturePlanning-CardImage3" />
            <div className="GesturePlanning-CardTextBox">
              <p className="GesturePlanning-CardTitle">Jeffrey Alan Marks</p>
              <p className="GesturePlanning-CardText">Jeffrey’s broad range of projects and inspiring design approach is often featured in global design publications such as Elle Décor, Architectural Digest, Town & Country, the Wall Street Journal Magazine and Vogue Living.</p>
            </div>
          </div>
          {/* <div className="GesturePlanning-Card">
            <div className="GesturePlanning-CardImage GesturePlanning-CardImage4" />
            <div className="GesturePlanning-CardTextBox">
              <p className="GesturePlanning-CardTitle">VU4ZD2KT</p>
              <p className="GesturePlanning-CardText">A reservable workspace for a small project team includes individual spaces at the bench and a side-by-side lounge area</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
