import React from 'react';
import './series1productrange.scss';

export default function Series1ProductRange() {
  return (
    <div className="Series1ProductRange">
      <div className="Series1ProductRange-Wrapper">
        <p className="Series1ProductRange-Title">Product Range</p>
        <div className="Series1ProductRange-ImageWrap">
          <div className="Series1ProductRange-Image Series1ProductRange-Image1">
            <p className="Series1ProductRange-ImageText">Lounging</p>
          </div>
          <div className="Series1ProductRange-Image Series1ProductRange-Image2">
            <p className="Series1ProductRange-ImageText">Iconics</p>
          </div>
          <div className="Series1ProductRange-Image Series1ProductRange-Image3">
            <p className="Series1ProductRange-ImageText">Tables</p>
          </div>
          <div className="Series1ProductRange-Image Series1ProductRange-Image4">
            <p className="Series1ProductRange-ImageText">Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
