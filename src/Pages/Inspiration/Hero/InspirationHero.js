import React from 'react';
import './inspirationhero.scss';

export default function InspirationHero() {
  return (
    <div className="InspirationHero">
      <div className="InspirationHero-Wrapper">
        <div className="InspirationHero-ImageBox">
          <div className="InspirationHero-WhiteBox">
            <p className="InspirationHero-WhiteBox-Title">The Design Renaissance</p>
            <p className="InspirationHero-WhiteBox-Text">Lenehan Studios presented to DC area interior designers and showed off beautiful decorative panting samples, techniques, and trends to the group.</p>
            <div className="InspirationHero-WhiteBox-Button">
              <p className="InspirationHero-WhiteBox-ButtonText">Get Inspired</p>
              <div className="InspirationHero-WhiteBox-ButtonIcon">
                <div className="InspirationHero-WhiteBox-ButtonIcon-Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="InspirationHero-MobileContent">
          <p className="InspirationHero-WhiteBox-Title">The Design Renaissance</p>
          <p className="InspirationHero-WhiteBox-Text">Lenehan Studios presented to DC area interior designers and showed off beautiful decorative panting samples, techniques, and trends to the group.</p>
          <div className="InspirationHero-Mobile-Button">
            <p className="InspirationHero-Mobile-ButtonText">Get Inspired</p>
            <div className="InspirationHero-Mobile-ButtonIcon">
              <div className="InspirationHero-Mobile-ButtonIcon-Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
