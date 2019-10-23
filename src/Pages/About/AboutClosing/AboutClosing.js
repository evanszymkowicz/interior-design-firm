import React from 'react';
import './aboutclosing.scss';

export default function AboutClosing() {
  return (
    <div className="AboutClosing">
      <div className="AboutClosing-Wrapper">
        <div className="AboutClosing-Image" />
        <div className="AboutClosing-TextBox">
          <p className="AboutClosing-Title">Our Leadership</p>
          <p className="AboutClosing-Text">A commitment to excellence, creativity and innovation. Meet the people ready to help your business thrive.</p>
          <div className="AboutClosing-Button">
            <p className="AboutClosing-ButtonText">Executive Staff</p>
            <div className="AboutClosing-ButtonIcon" />
          </div>
          <div className="AboutClosing-Button">
            <p className="AboutClosing-ButtonText">Floor Staff</p>
            <div className="AboutClosing-ButtonIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}
