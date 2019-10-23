import React from 'react';
import './whatsnew.scss';

export default function WhatsNew() {
  return (
    <div className="WhatsNew">
      <div className="WhatsNew-Content">
        <div className="WhatsNew-TextSection">
          <p className="WhatsNew-Title" id="WhatsNew-Title">What is New at the Design Center</p>
          <p className="WhatsNew-Text" id="WhatsNew-Text">
          Booz Allen placed high emphasis on sophisticated audio-visual technology, including smart boards, digital displays, video conferencing capabilities and lab spaces for product development and testing.
            <br />
            <br />
            {' '}
          Booz Allen Hamilton’s Innovation Center in Washington, DC is a free-flowing collaborative space where their employees, clients, partners, and the innovation community can converge to inspire ideas, build new technologies, grow their networks, and work together to solve the toughest problems of today and the future.
            {' '}
          </p>
          <div className="WhatsNew-Button">
            <p className="WhatsNew-ButtonText">
            See the Results
            </p>
            <div className="WhatsNew-ButtonIcon">
              <div className="WhatsNew-ButtonIcon-Image" />
            </div>
          </div>
        </div>
        <div className="WhatsNew-Image" />
      </div>
    </div>
  );
}
