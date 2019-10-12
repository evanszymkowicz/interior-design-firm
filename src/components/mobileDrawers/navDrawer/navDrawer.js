import React from 'react';
import { Link } from 'react-router-dom';
import './navDrawer.scss';

export default function NavDrawer({
  NavDrawerIsOpen,
  CloseNavDrawer,
  CloseFooterTab1,
  CloseFooterTab2,
  CloseFooterTab3,
  CloseFooterTab4
}) {

  let NavDrawerClasses = 'NavDrawer';
  if (NavDrawerIsOpen) {
    NavDrawerClasses = 'NavDrawer NavDrawerOpen';
  }

  const EventGroup = () => {
    CloseFooterTab1();
    CloseFooterTab2();
    CloseFooterTab3();
    CloseFooterTab4();
    CloseNavDrawer();
  }

  return (<div className={NavDrawerClasses}>
    <div className='NavDrawer-Wrapper'>
      <ul className='NavDrawer-List'>
        <Link to='/product-page' className='NavDrawer-ListLink'>
          <li className='NavDrawer-ListItem' onClick={EventGroup}>

            Products
            <div className='NavDrawer-ListItemLinkIcon'></div>

          </li>
        </Link>
        <Link to='/research' className='NavDrawer-ListLink'>
          <li className='NavDrawer-ListItem' onClick={EventGroup}>

            Research
            <div className='NavDrawer-ListItemLinkIcon'></div>

          </li>
        </Link>
        <Link to='/inspiration' className='NavDrawer-ListLink'>
          <li className='NavDrawer-ListItem' onClick={EventGroup}>

            Inspiration
            <div className='NavDrawer-ListItemLinkIcon'></div>

          </li>
        </Link>
        <Link to='/about' className='NavDrawer-ListLink'>
          <li className='NavDrawer-ListItem' onClick={EventGroup}>

            About
            <div className='NavDrawer-ListItemLinkIcon'></div>

          </li>
        </Link>

        <Link to='/find-a-dealer' className='NavDrawer-ListLink'>
          <li className='NavDrawer-ListItem NavDrawer-Dealer' onClick={EventGroup}>

            Find A Dealer
            <div className='NavDrawer-ListItemLinkIcon'></div>

          </li>
        </Link>

      </ul>
    </div>

  </div>)
}
