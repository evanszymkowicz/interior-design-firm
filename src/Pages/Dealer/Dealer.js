import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Scroll from '../../Features/Scroll/Scroll';
import './dealer.scss';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 38.900497, lng: -77.007507 }}
    />
  );
}
const WrapperMap = withScriptjs(withGoogleMap(Map));

export default function Dealer() {
  return (
    <div className="Dealer">
      <div className="Dealer-Wrapper">
        <div className="Dealer-TitleBlock">
          <p className="Dealer-Title">Authorized Partners</p>
        </div>
        <div className="Dealer-Content">
          <div className="Dealer-CardWrap">
            <Scroll>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">Michael-Cleary</p>
                  <p className="Dealer-Card-Text">Chicago 222</p>
                  <p className="Dealer-Card-Text">Merchandise Mart</p>
                  <p className="Dealer-Card-Text">Chicago, IL 60654</p>
                  <p className="Dealer-Card-Text">Phone: (312) 464-0800</p>
                  <p className="Dealer-Card-Text">Fax: (312) 464-0805</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">Century Furniture</p>
                  <p className="Dealer-Card-Text">1099 14th St NW</p>
                  <p className="Dealer-Card-Text">Washington, D.C.</p>
                  <p className="Dealer-Card-Text">20005</p>
                  <p className="Dealer-Card-Text">(800) 852-5552</p>
                  {/* <p className="Dealer-Card-Text">Fax: 212 607 5654</p> */}
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">J. Lambeth Co.</p>
                  <p className="Dealer-Card-Text">
                  810 Seventh Avenue
                  </p>
                  <p className="Dealer-Card-Text">New York</p>
                  <p className="Dealer-Card-Text">10019-5818</p>
                  <p className="Dealer-Card-Text">Phone: (212) 721 7100</p>
                  <p className="Dealer-Card-Text">Fax: (212) 721 7175</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">Concepts Office Furnishings</p>
                  <p className="Dealer-Card-Text">280 North Midland Avenue Building J </p>
                  <p className="Dealer-Card-Text">Unit #204</p>
                  <p className="Dealer-Card-Text">Saddle Brook</p>
                  <p className="Dealer-Card-Text">07663-5708</p>
                  <p className="Dealer-Card-Text">Phone: 201 727 9110</p>
                  <p className="Dealer-Card-Text">Fax: 201 727 9112</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">Michael-Cleary</p>
                  <p className="Dealer-Card-Text">215 Lexington Avenue 9th Floor</p>
                  <p className="Dealer-Card-Text">New York</p>
                  <p className="Dealer-Card-Text">10016-6023</p>
                  <p className="Dealer-Card-Text">Phone: 212 888 9999</p>
                  <p className="Dealer-Card-Text">Fax: 212 888 9999</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">Century Furniture</p>
                  <p className="Dealer-Card-Text">00 D St SW No. 701</p>
                  <p className="Dealer-Card-Text">New York</p>
                  <p className="Dealer-Card-Text">20005</p>
                  <p className="Dealer-Card-Text">(800) 852-5552</p>
                  <p className="Dealer-Card-Text">Fax: 212 607 5654</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">J. Lambeth Co.</p>
                  <p className="Dealer-Card-Text">
                  J. Lambeth Co.
                  810 Seventh Avenue
                  </p>
                  <p className="Dealer-Card-Text">New York</p>
                  <p className="Dealer-Card-Text">10019-5818</p>
                  <p className="Dealer-Card-Text">Phone: 212 721 7100</p>
                  <p className="Dealer-Card-Text">Fax: 212 721 7175</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Dealer-Card">
                <div className="Dealer-CardLeft">
                  <p className="Dealer-Card-Title">Concepts Office Furnishings</p>
                  <p className="Dealer-Card-Text">280 North Midland Avenue Building J </p>
                  <p className="Dealer-Card-Text">Unit #204</p>
                  <p className="Dealer-Card-Text">Saddle Brook</p>
                  <p className="Dealer-Card-Text">07663-5708</p>
                  <p className="Dealer-Card-Text">Phone: 201 727 9110</p>
                  <p className="Dealer-Card-Text">Fax: 201 727 9112</p>
                </div>
                <div className="Dealer-CardRight">
                  <p className="Dealer-Card-Text">Authorized Design Center Partner</p>
                  <div className="Dealer-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
            </Scroll>
          </div>
          <div className="Dealer-Map">
            <WrapperMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCnW9KXyBcLtsRSTq6JQVVUu2W8jAcjGqY"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
