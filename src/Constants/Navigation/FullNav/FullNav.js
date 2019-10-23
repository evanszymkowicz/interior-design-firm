import React from 'react';
import { Link } from 'react-router-dom';
import './fullnav.scss';

export default function FullNav() {
  return (
    <div className="FullNav">
      <div className="FullNav-Wrapper">
        <div className="FullNav-TopRow">
          <Link to="/">
            <h1 className="FullNav-Logo">The Washington Design Center</h1>
          </Link>
          <div className="FullNav-UserLinks-Wrapper">
            <Link to="/registration" className="FullNav-RegistrationLink">
              <p className="FullNav-Registration">Login / Register</p>
            </Link>
            <Link to="/contact">
              <div className="FullNav-ContactBtn">
                <p className="FullNav-ContactBtn-Text">Contact Us</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="FullNav-BottomRow">
          <div className="FullNav-Links-Wrapper">
            <Link to="/product-page">
              <p className="FullNav-Link">Showrooms</p>
            </Link>
            <Link to="/research">
              <p className="FullNav-Link">Solutions</p>
            </Link>
            <Link to="/inspiration">
              <p className="FullNav-Link">Inspiration</p>
            </Link>
            <Link to="/about">
              <p className="FullNav-Link">About</p>
            </Link>
          </div>
          <Link to="/find-a-dealer">
            <div className="FullNav-Dealer-Wrapper">
              <div className="FullNav-Dealer-Icon" />
              <p className="FullNav-Dealer-Text">Find Us</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
