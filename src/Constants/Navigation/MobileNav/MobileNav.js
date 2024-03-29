import React from 'react';
import { Link } from 'react-router-dom';
import './mobilenav.scss';

export default function MobileNav({ ToggleNavDrawer, ToggleUserDrawer }) {
  return (
    <div className="MobileNav">
      <div className="MobileNav-MenuIcon" onClick={ToggleNavDrawer}>
        <div className="MobileNav-MenuIcon-Bar" />
        <div className="MobileNav-MenuIcon-Bar" />
        <div className="MobileNav-MenuIcon-Bar" />
      </div>
      <Link to="/">
        <h1 className="MobileNav-Logo">The Washington Design Center</h1>
      </Link>
      <div className="MobileNav-UserIcon" onClick={ToggleUserDrawer} />
    </div>
  );
}
