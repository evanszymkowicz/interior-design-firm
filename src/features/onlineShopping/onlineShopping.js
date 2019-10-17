import React from 'react';
import { Link } from 'react-router-dom';
import './__onlineShopping.scss';

export default function PurchaseBar() {
  return (
    <div className="PurchaseBar">
      <div className="PurchaseBar-Wrapper">
        <div className="PurchaseBar-TopRow">
          <p className="PurchaseBar-Title">Purchasing Options</p>
          <Link to="/contact">
            <div className="PurchaseBar-Button">
              <p className="PurchaseBar-ButtonText">Contact Us</p>
              <div className="PurchaseBar-ButtonIcon" />
            </div>
          </Link>
        </div>
        <div className="PurchaseBar-BottomRow">
          <div className="PurchaseBar-Phone">
            <div className="PurchaseBar-PhoneIcon" />
            <p className="PurchaseBar-PhoneText">888 - 753 - 9999</p>
          </div>
          <div className="PurchaseBar-Store">
            <div className="PurchaseBar-StoreIcon" />
            <p className="PurchaseBar-StoreText">The Washington Design Center Store</p>
          </div>
          <Link to="/find-a-dealer" className="PurchaseBar-Dealer">
            <div className="PurchaseBar-DealerIcon" />
            <p className="PurchaseBar-DealerText">Find a Showroom</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
