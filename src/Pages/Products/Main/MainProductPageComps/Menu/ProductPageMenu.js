import React from 'react';
import { Link } from 'react-router-dom';
import './productpagemenu.scss';

export default function ProductPageMenu() {
  return (
    <div className="ProductPageMenu">
      <p className="ProductPageMenu-Title">
      Showrooms
      </p>
      <div className="ProductPageMenu-Links">
        <div className="ProductPageMenu-Category">
          <p className="ProductPageMenu-LinksTitle">Home</p>
          <Link to="/product/silq">
            <p className="ProductPageMenu-Link">SILQ</p>
          </Link>
        </div>
        <div className="ProductPageMenu-Category">
          <p className="ProductPageMenu-LinksTitle">Office</p>
          <Link to="/product/series1">
            <p className="ProductPageMenu-Link">Series 1</p>
          </Link>
          <Link to="/product/gesture">
            <p className="ProductPageMenu-Link">A. Rudin</p>
          </Link>
          <Link to="/product/leap">
            <p className="ProductPageMenu-Link">Leap</p>
          </Link>
        </div>
        <div className="ProductPageMenu-Category">
          <p className="ProductPageMenu-LinksTitle">You Decide</p>
          <Link to="/product-page">
            <p className="ProductPageMenu-Link">Amia</p>
          </Link>
          <Link to="/product-page">
            <p className="ProductPageMenu-Link">Cobi</p>
          </Link>
        </div>
      </div>
      <p className="ProductPageMenu-Hook">When it comes to office seating, our chairs deliver ergonomic performance with a contemporary design. From desk to conference, we have the seating solutions for your space.</p>
    </div>
  );
}
