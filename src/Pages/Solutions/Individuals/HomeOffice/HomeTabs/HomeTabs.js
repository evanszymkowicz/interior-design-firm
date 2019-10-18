import React from 'react';
import './hometabs.scss';

export default function HomeTabs() {
  return (
    <div className="HomeTabs">
      <div className="HomeTabs-Wrapper">
        <div className="HomeTabs-Image" />
        <div className="HomeTabs-TextBox">
          <p className="HomeTabs-Title">Tabs</p>
          <p className="HomeTabs-Text">Starck Series 1 was thoughtfully designed with integrated LiveBack technology, adaptive bolstering and 4D adjustable arms, delivering the dynamic performance you’ve come to expect from Starck.</p>
          <div className="HomeTabs-Button">
            Watch Video
          </div>
        </div>
      </div>
    </div>
  );
}
