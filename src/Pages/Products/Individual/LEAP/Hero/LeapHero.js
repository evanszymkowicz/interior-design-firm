import React from 'react';
import './leaphero.scss';

export default function LeapHero() {
  return (
    <div className="LeapHero">
      <div className="LeapHero-Wrapper">
        <div className="LeapHero-Image">
          <div className="LeapHero-WhiteBox">
            <div className="LeapHero-WhiteBox-Top">
              <p className="LeapHero-WhiteBox-Title">Design Resources</p>
            </div>
            <p className="LeapHero-WhiteBox-Text">A perfect fit with an exceptional range of adjustments, the Leap office chair delivers full support for various body shapes and sizes.</p>
            <div className="LeapHero-Button">
            View Resources
            </div>
          </div>
        </div>
        <div className="LeapHero-Mobile-TextBox">
          <p className="LeapHero-Mobile-Title">Design Resources</p>
          <p className="LeapHero-Mobile-Text">A. Rudin has been a Los Angeles-based family-owned business fabricating custom furniture of exceptional quality and comfort..</p>
          <div className="LeapHero-Button">
          View Resources
          </div>
        </div>
      </div>
    </div>
  );
}
