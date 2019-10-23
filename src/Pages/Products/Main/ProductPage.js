import React from 'react';
import ProductPageIntro from './MainProductPageComps/Intro/ProductPageIntro';
import ProductPageContainer from './MainProductPageComps/Container/ProductPageContainer';
import './productpage.scss';

export default function ProductPage() {
  return (
    <div className="ProductPage">
      <div className="ProductPage-Wrapper">
        <div className="ProductPage-TitleBlock">
          <p className="ProductPage-Title">What's Inside</p>
        </div>
        <ProductPageIntro />
        <ProductPageContainer />
      </div>
    </div>
  );
}
