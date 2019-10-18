import React from 'react';
import './homeseating.scss';

export default function HomeSeating() {
  return (
    <div className="HomeSeating">
      <div className="HomeSeating-Wrapper">
        <div className="HomeSeating-Image" />
        <div className="HomeSeating-TextBox">
          <p className="HomeSeating-Title">The Strack Seating Difference</p>
          <p className="HomeSeating-Text">At Starck, we study how you work and how you feel. You inspire new seating solutions, each expressed with uncompromising quality, craftsmanship and sustainability.</p>
          <div className="HomeSeating-Button">
          Find Out More
          </div>
        </div>
      </div>
    </div>
  );
}
