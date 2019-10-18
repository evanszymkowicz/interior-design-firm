import React from 'react';
import './corporatehero.scss';

export default function CorporateHero() {
  return (
    <div className="CorporateHero">
      <div className="CorporateHero-Wrapper">
        <div className="CorporateHero-Image">
          <div className="CorporateHero-WhiteBox">
            <div className="CorporateHero-WhiteBox-Top">
              <p className="CorporateHero-WhiteBox-Title">Design Resources</p>
            </div>
            <p className="CorporateHero-WhiteBox-Text">Gesture is the first chair designed to support our interactions with today's technologies.</p>
            <div className="CorporateHero-Button">
            View Resources
            </div>
          </div>
        </div>
        <div className="CorporateHero-Mobile-TextBox">
          <p className="CorporateHero-Mobile-Title">Design Resources</p>
          <p className="CorporateHero-Mobile-Text">Gesture is the first chair designed to support our interactions with today's technologies.</p>
          <div className="CorporateHero-Button">
          View Resources
          </div>
        </div>

      </div>
    </div>
  );
}
