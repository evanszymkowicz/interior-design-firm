import React from 'react';
import './_homeHero.scss';

export default function HomeHero() {
  return (
    <div className="Home1Hero">
      <div className="Home1Hero-Wrapper">
        <div className="Home1Hero-Image">
          <div className="Home1Hero-WhiteBox">
            <div className="Home1Hero-WhiteBox-Top">
              <p className="Home1Hero-WhiteBox-Title">Design Resources</p>
            </div>
            <div className="Home1Hero-WhiteBox-TextWrap">
              <p className="Home1Hero-WhiteBox-Text">Starck Home 1 office chair delivers on what’s important — performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
            </div>
            <div className="Home1Hero-WhiteBox-Button">
              <p className="Home1Hero-WhiteBox-ButtonText">View Resources</p>
            </div>
          </div>
        </div>
        <div className="Home1Hero-Mobile-TextBox">
          <p className="Home1Hero-Mobile-Title">Design Resources</p>
          <p className="Home1Hero-Mobile-Text">Starck Home 1 office chair delivers on what’s important — performance, style and choice. It retains everything that’s valued in a chair, while making it attainable for everyone.</p>
        </div>
      </div>
    </div>
  );
}
