import React from 'react';
import GestureHero from './Hero/GestureHero';
import GestureInfoBar from './InfoBar/GestureInfoBar';
import GestureInsights from './Insights/GestureInsights';
import GestureSeating from './Seating/GestureSeating';
import GesturePlanning from './Planning/GesturePlanning';
import GestureProducts from './ProductRange/GestureProducts';
import PurchaseBar from '../../../../Features/PurchaseBar/PurchaseBar';
import './gesture.scss';

export default function Gesture() {
  return (
    <div className="Gesture">
      <div className="Gesture-Wrapper">
        <div className="Gesture-TitleBlock">
          <p className="Gesture-Title">A. Rudin</p>
          <div className="BuyButton">
            <p className="BuyButtonText">Buy Now</p>
          </div>
        </div>
        <GestureHero />
        <GestureInfoBar />
        <GestureInsights />
        <GestureSeating />
        <GesturePlanning />
        <GestureProducts />
        <PurchaseBar />
      </div>
    </div>
  );
}
