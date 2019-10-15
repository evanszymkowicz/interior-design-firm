import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default function Nav() {
  return (<div className='Nav'>
    <div className='Nav-Wrapper'>
      <div className='Nav-TopRow'>
        <Link to='/'>
          <h1 className='Nav-Logo'>The Washington Design Center</h1>
        </Link>
        <div className='Nav-UserLinks-Wrapper'>
          <Link to='/registration' className='Nav-RegistrationLink'>
            <p className='Nav-Registration'>Login / Register</p>
          </Link>
          <Link to='/contact'>
            <div className='Nav-ContactBtn'>
              <p className='Nav-ContactBtn-Text'>Contact Us</p>
            </div>
          </Link>

        </div>
      </div>
      <div className='Nav-BottomRow'>
        <div className='Nav-Links-Wrapper'>
          <Link to='/product-page'>
            <p className='Nav-Link'>Products</p>
          </Link>
          <Link to='/research'>
            <p className='Nav-Link'>Research</p>
          </Link>
          <Link to='/inspiration'>
            <p className='Nav-Link'>Inspiration</p>
          </Link>
          <Link to='/about'>
            <p className='Nav-Link'>About</p>
          </Link>

        </div>
        <Link to='/find-a-dealer'>
          <div className='Nav-Dealer-Wrapper'>
            <div className='Nav-Dealer-Icon'></div>
            <p className='Nav-Dealer-Text'>Find A Showroom</p>
          </div>
        </Link>

      </div>
    </div>
  </div>)
}
