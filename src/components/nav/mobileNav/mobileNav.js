import React from 'react';
import './mobileNav.scss';

import { Link } from 'react-router-dom';

export default function MobileNav ({ToggleNavDrawer, ToggleUserDrawer}) {
  return (<div className='MobileNav'>

    <div className='MobileNav-MenuIcon' onClick={ToggleNavDrawer}>
      <div className='MobileNav-MenuIcon-Bar'></div>
      <div className='MobileNav-MenuIcon-Bar'></div>
      <div className='MobileNav-MenuIcon-Bar'></div>
    </div>

    <Link to='/'>
      <h1 className='MobileNav-Logo'>The Washington Design Center</h1>
    </Link>

    <div className='MobileNav-UserIcon' onClick={ToggleUserDrawer}></div>
  </div>)
}
