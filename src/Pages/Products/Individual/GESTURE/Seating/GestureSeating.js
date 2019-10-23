import React from 'react';
import './gestureseating.scss';

export default function GestureSeating() {
  return (
    <div className="GestureSeating">
      <div className="GestureSeating-Wrapper">
        <div className="GestureSeating-Image" />
        <div className="GestureSeating-TextBox">
          <p className="GestureSeating-Title">The A. Rudin Difference</p>
          <p className="GestureSeating-Text">Dedicated craftspeople maintain a tradition of fine craftsmanship, using old-world skills elsewhere forgotten, to produce custom furniture for elegant living; Residential, hospitality, and contract.</p>
          <p className="GestureSeating-Text">From concept to execution, A. Rudin furniture exemplifies a commitment to creativity and craftsmanship. Beauty takes many forms, yet the finest things always share in a quality of quiet grace, of great simplicity and perfected craftsmanship. A. Rudin interprets classic seating to suit personal tastes and today’s interiors.</p>
          <div className="GestureSeating-Button">
          Find Out More
          </div>
        </div>
      </div>
    </div>
  );
}
