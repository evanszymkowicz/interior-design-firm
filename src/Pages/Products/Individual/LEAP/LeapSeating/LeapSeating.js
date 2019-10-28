import React from 'react';
import './leapseating.scss';

export default function LeapSeating() {
  return (
    <div className="LeapSeating">
      <div className="LeapSeating-Wrapper">
        <div className="LeapSeating-Image" />
        <div className="LeapSeating-TextBox">
          <p className="LeapSeating-Title">Michael Cleary</p>
          <p className="LeapSeating-Text">From suggestions to sizes, we're ready  to  help.</p>
          <div className="LeapSeating-Button">
          Connect
          </div>
        </div>
      </div>
    </div>
  );
}
