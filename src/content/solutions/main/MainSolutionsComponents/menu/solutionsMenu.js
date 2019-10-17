import React from 'react';
import { Link } from 'react-router-dom';
import './_SolutionsMenu.scss';

export default function SolutionsMenu() {
  return (<div className='SolutionsMenu'>
    <p className='SolutionsMenu-Title'>
      The Washington Design Center in 2019
    </p>
    <div className='SolutionsMenu-Links'>
      <div className='SolutionsMenu-Category'>
        <p className='SolutionsMenu-LinksTitle'>Premium</p>
        <Link to='/product/silq'>
          <p className='SolutionsMenu-Link'>SILQ</p>
        </Link>
      </div>

      <div className='SolutionsMenu-Category'>
        <p className='SolutionsMenu-LinksTitle'>Class</p>
        <Link to='/product/series1'>
          <p className='SolutionsMenu-Link'>Series 1</p>
        </Link>
        <Link to='/product/gesture'>
          <p className='SolutionsMenu-Link'>Gesture</p>
        </Link>
        <Link to='/product/leap'>
          <p className='SolutionsMenu-Link'>Leap</p>
        </Link>
      </div>

      <div className='SolutionsMenu-Category'>
        <p className='SolutionsMenu-LinksTitle'>Utility</p>
        <Link to='/product-page'>
          <p className='SolutionsMenu-Link'>Amia</p>
        </Link>
        <Link to='/product-page'>
          <p className='SolutionsMenu-Link'>Cobi</p>
        </Link>
      </div>

    </div>
    <p className='SolutionsMenu-Hook'>When it comes to office seating, our chairs deliver ergonomic performance with a contemporary design. From desk to conference, we have the seating solutions for your space.</p>
  </div>)
}
