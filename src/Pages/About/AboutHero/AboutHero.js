import React from 'react';
import './abouthero.scss';

export default function AboutHero() {
  return (
    <div className="AboutHero">
      <div className="AboutHero-Wrapper">
        <div className="AboutHero-Image">
          <div className="AboutHero-WhiteBox">
            <p className="AboutHero-WhiteBox-Title">About The Washington Design Center</p>
            <p className="AboutHero-WhiteBox-Text">For over 80 years The Washington Design Center has helped create great experiences for the area's leading organizations, across industries and sectors</p>
          </div>
        </div>
        <div className="AboutHero-MobileContent">
          <p className="AboutHero-MobileTitle">About The Washington Design Center</p>
          <p className="AboutHero-MobileText">For over 80 years The Washington Design Center has helped create great experiences for the area's leading organizations, across industries and sectors</p>
        </div>
      </div>
    </div>
  );
}
