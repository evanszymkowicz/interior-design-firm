import React from 'react';
import './aboutinfo.scss';

export default function AboutInfo() {
  return (
    <div className="AboutInfo">
      <div className="AboutInfo-Wrapper">
        <p className="AboutInfo-Title">Quick Facts</p>
        <div className="AboutInfo-Table">
          <div className="AboutInfo-TableRow">
            <div className="AboutInfo-TableRow-Column">
              <p className="AboutInfo-TableRow-ColumnText">Opened</p>
            </div>
            <div className="AboutInfo-TableRowColumn">
              <p className="AboutInfo-TableRow-ColumnText">1983</p>
            </div>
          </div>
          <div className="AboutInfo-TableRow">
            <div className="AboutInfo-TableRow-Column">
              <p className="AboutInfo-TableRow-ColumnText">Showrooms</p>
            </div>
            <div className="AboutInfo-TableRowColumn">
              <p className="AboutInfo-TableRow-ColumnText">100</p>
            </div>
          </div>
          <div className="AboutInfo-TableRow">
            <div className="AboutInfo-TableRow-Column">
              <p className="AboutInfo-TableRow-ColumnText">Number Of Employees</p>
            </div>
            <div className="AboutInfo-TableRowColumn">
              <p className="AboutInfo-TableRow-ColumnText">300</p>
            </div>
          </div>
          <div className="AboutInfo-TableRow">
            <div className="AboutInfo-TableRow-Column">
              <p className="AboutInfo-TableRow-ColumnText">Vendors</p>
            </div>
            <div className="AboutInfo-TableRowColumn">
              <p className="AboutInfo-TableRow-ColumnText">300+</p>
            </div>
          </div>
          <div className="AboutInfo-TableRow">
            <div className="AboutInfo-TableRow-Column">
              <p className="AboutInfo-TableRow-ColumnText">Square Footage</p>
            </div>
            <div className="AboutInfo-TableRowColumn">
              <p className="AboutInfo-TableRow-ColumnText">30,000+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
