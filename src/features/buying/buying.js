import React from 'react';
import { Link } from 'react-router-dom';
import './__buying.scss';

export default function Buying() {
  return (
    <div className="Buying">
      <div className="Buying-Wrapper">
        <div className="Buying-TopRow">
          <p className="Buying-Title">Purchase Options</p>
          <Link to="/contact">
            <div className="Buying-Button">
              <p className="Buying-ButtonText">Contact Us</p>
              <div className="Buying-ButtonIcon" />
            </div>
          </Link>
        </div>
        <div className="Buying-BottomRow">
          <div className="Buying-Phone">
            <div className="Buying-PhoneIcon" />
            <p className="Buying-PhoneText">888 - 753 - 9999</p>
          </div>
          <div className="Buying-Store">
            <div className="Buying-StoreIcon" />
            <p className="Buying-StoreText">Washington Design Center</p>
          </div>
          <Link to="/find-a-dealer" className="Buying-Dealer">
            <div className="Buying-DealerIcon" />
            <p className="Buying-DealerText">Find a Showroom</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
