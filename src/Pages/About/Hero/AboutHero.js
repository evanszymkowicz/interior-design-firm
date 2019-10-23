import React from 'react';
import './abouthero.scss';

export default function AboutHero() {
  return (
    <div className="AboutHero">
      <div className="AboutHero-Wrapper">
        <div className="AboutHero-Image">
          <div className="AboutHero-WhiteBox">
            <p className="AboutHero-WhiteBox-Title">About The Washington Design Center</p>
            <p className="AboutHero-WhiteBox-Text">Today, you can stop by on your lunch hour and admire the exotic wood dining tables and cast-stone mantels destined for the pages of Architectural Digest.</p>
          </div>
        </div>
        <div className="AboutHero-MobileContent">
          <p className="AboutHero-MobileTitle">About The Washington Design Center</p>
          <p className="AboutHero-MobileText">Today, you can stop by on your lunch hour and admire the exotic wood dining tables and cast-stone mantels destined for the pages of Architectural Digest.</p>
        </div>
      </div>
    </div>
  );
}
