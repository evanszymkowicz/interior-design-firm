import React from 'react';
import './landinghero.scss';
import { Link } from 'react-router-dom';

export default function LandingHero() {
  return (
    <div className="LandingHero">
      <div className="LandingHero-Content">
        <div className="LandingHero-BlueBox">
          <div className="LandingHero-BlueBox-WhiteBox">
            <p className="LandingHero-BlueBox-WhiteBox-Title">Home. Your Luxury Destination</p>
            <p className="LandingHero-BlueBox-WhiteBox-Text">The Washington Design Center at Franklin Court is conveniently located in the heart of the downtown Washington, DC.</p>
            <Link to="/product/silq">
              <div className="LandingHero-BlueBox-WhiteBox-Button">
                <p className="LandingHero-BlueBox-WhiteBox-ButtonText">Featured</p>
                <div className="LandingHero-BlueBox-WhiteBox-ButtonIcon">
                  <div className="LandingHero-BlueBox-WhiteBox-ButtonIcon-Image" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="LandingHero-ImageBox" />
      </div>
      <div className="LandingHero-MobileContent">
        <p className="LandingHero-MobileTitle">Home. Your Luxury Destination</p>
        <p className="LandingHero-MobileText">The Washington Design Center at Franklin Court is conveniently located in the heart of the downtown Washington, DC</p>
        <Link to="/product/silq">
          <div className="LandingHero-Mobile-Button" id="LandingHero-Mobile-Button">
            <p className="LandingHero-Mobile-ButtonText">Featured</p>
            <div className="LandingHero-Mobile-ButtonIcon">
              <div className="LandingHero-Mobile-ButtonIcon-Image" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
