import React from 'react';
import ProductPageMenu from '../Menu/ProductPageMenu';
import CardHolder from '../CardHolder/CardHolder';
import './productpagecontainer.scss';

export default function ProductPageContainer() {
  return (
    <div className="ProductPageContainer">
      <div className="ProductPageContainer-Wrapper">
        <ProductPageMenu />
        <CardHolder />
      </div>
    </div>
  );
}
