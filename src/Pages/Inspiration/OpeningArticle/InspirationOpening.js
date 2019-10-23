import React from 'react';
import './inspirationopening.scss';

export default function InspirationOpening() {
  return (
    <div className="InspirationOpening">
      <div className="InspirationOpening-Wrapper">
        <div className="InspirationOpening-Image" />
        <div className="InspirationOpening-TextBox">
          <p className="InspirationOpening-Title">Why it Matters</p>
          <p className="InspirationOpening-Text">Design professionals work tirelessly to advance the interior design profession and communicate the impact of design on the human experience.</p>
          <div className="InspirationOpening-Button">
            <p className="InspirationOpening-ButtonText">Read Article</p>
            <div className="InspirationOpening-ButtonIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
