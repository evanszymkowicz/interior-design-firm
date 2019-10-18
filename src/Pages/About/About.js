import React from 'react';
import './about.scss';

export default function About() {
  return (
    <div className="About">
      <div className="About-Wrapper">
        <div className="About-Image" />
        <div className="About-TextBox">
          <p className="About-Title">Our Team</p>
          <p className="About-Text">A commitment to excellence, creativity and innovation. Meet the people ready to help your business thrive.</p>
          <div className="About-Button">
            <p className="About-ButtonText">Executive Staff</p>
            <div className="About-ButtonIcon" />
          </div>
          <div className="About-Button">
            <p className="About-ButtonText">Floor Staff</p>
            <div className="About-ButtonIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
