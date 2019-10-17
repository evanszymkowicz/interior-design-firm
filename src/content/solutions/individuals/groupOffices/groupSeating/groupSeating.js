import React from 'react';
import './_groupSeating.scss';

export default function GroupSeating() {
  return (
    <div className="GroupSeating">
      <div className="GroupSeating-Wrapper">
        <div className="GroupSeating-Image" />
        <div className="GroupSeating-TextBox">
          <p className="GroupSeating-Title">The Washington Design Center Difference</p>
          <p className="GroupSeating-Text">At Starck, we study how you work and how you feel. You inspire new seating solutions, each expressed with uncompromising quality, craftsmanship and sustainability.</p>
          <div className="GroupSeating-Button">
          Find Out More
          </div>
        </div>
      </div>
    </div>
  );
}
