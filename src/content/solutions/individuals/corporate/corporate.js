import React from 'react';
import CorporateHero from './hero/corporateHero';
import CorporateInfoBar from './info/corporateInfo';
import CorporateInsights from './insights/corporateInsights';
import CorporateSeating from './seating/corporateSeating';
import CorporatePlanning from './planning/corporatePlanning';
import CorporateProducts from './products/corporateProducts';
import PurchaseBar from '../features/onlineShopping/onlineShopping';
import './_corporate.scss';

export default function Corporate() {
  return (
    <div className="Corporate">
      <div className="Corporate-Wrapper">
        <div className="Corporate-TitleBlock">
          <p className="Corporate-Title">Corporate Solutions</p>
          <div className="BuyButton">
            <p className="BuyButtonText">Buy Now</p>
          </div>
        </div>
        <CorporateHero />
        <CorporateInfoBar />
        <CorporateInsights />
        <CorporateSeating />
        <CorporatePlanning />
        <CorporateProducts />
        <PurchaseBar />
      </div>
    </div>
  );
}
