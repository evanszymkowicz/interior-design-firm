import React from 'react';
import './_firstArticle.scss';

export default function FirstArticle() {
  return (
    <div className="FirstArticle">
      <div className="FirstArticle-Wrapper">
        <div className="FirstArticle-Image" />
        <div className="FirstArticle-TextBox">
          <p className="FirstArticle-Title">What Workers Want</p>
          <p className="FirstArticle-Text">Why are people moving away from offices? What kinds of spaces are they looking for? In our recent study, we found that monotony is a huge motivator.</p>
          <div className="FirstArticle-Button">
            <p className="FirstArticle-ButtonText">Read Article</p>
            <div className="FirstArticle-ButtonIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
