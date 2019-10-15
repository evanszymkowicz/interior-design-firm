import React from 'react';
import CorporateHero from './Hero/CorporateHero';
import CorporateInfoBar from './InfoBar/CorporateInfoBar';
import CorporateInsights from './Insights/CorporateInsights';
import CorporateSeating from './Seating/CorporateSeating';
import CorporatePlanning from './Planning/CorporatePlanning';
import CorporateProducts from './ProductRange/CorporateProducts';
import PurchaseBar from '../../../../Recycled/PurchaseBar/PurchaseBar';
import './corporate.scss';

export default function Corporate() {
  return (<div className='Corporate'>
    <div className='Corporate-Wrapper'>

      <div className='Corporate-TitleBlock'>
        <p className='Corporate-Title'>Corporate</p>
        <div className='BuyButton'>
          <p className='BuyButtonText'>Buy Now</p>
        </div>
      </div>

      <CorporateHero/>
      <CorporateInfoBar/>
      <CorporateInsights/>
      <CorporateSeating/>
      <CorporatePlanning/>
      <CorporateProducts/>
      <PurchaseBar/>

    </div>
  </div>)
}
