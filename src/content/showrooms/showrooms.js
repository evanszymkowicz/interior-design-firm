import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Scroll from '../../features/scroll/scroll';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 38.9072,
        lng: 77.0369,
      }}
    />
  );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));

export default function Showroom() {
  return (
    <div className="Showroom">
      <div className="Showroom-Wrapper">
        <div className="Showroom-TitleBlock">
          <p className="Showroom-Title">Find A Showroom</p>
        </div>
        <div className="Showroom-Content">
          <div className="Showroom-CardWrap">
            <Scroll>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">Waldners Business Environments</p>
                  <p className="Showroom-Card-Text">215 Lexington Avenue 9th Floor</p>
                  <p className="Showroom-Card-Text">New York</p>
                  <p className="Showroom-Card-Text">10016-6023</p>
                  <p className="Showroom-Card-Text">Phone: 212 888 9999</p>
                  <p className="Showroom-Card-Text">Fax: 212 888 9999</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">Empire Office Inc.</p>
                  <p className="Showroom-Card-Text">105 Madison Avenue 15 th Floor</p>
                  <p className="Showroom-Card-Text">New York</p>
                  <p className="Showroom-Card-Text">10016-8810</p>
                  <p className="Showroom-Card-Text">Phone: 212 607 5500</p>
                  <p className="Showroom-Card-Text">Fax: 212 607 5654</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">AFD Contract Furniture Inc.</p>
                  <p className="Showroom-Card-Text">AFD Contract Furniture Inc. 810 Seventh Avenue</p>
                  <p className="Showroom-Card-Text">New York</p>
                  <p className="Showroom-Card-Text">10019-5818</p>
                  <p className="Showroom-Card-Text">Phone: 212 721 7100</p>
                  <p className="Showroom-Card-Text">Fax: 212 721 7175</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">Concepts Office Furnishings</p>
                  <p className="Showroom-Card-Text">
280 North Midland Avenue Building J
                  </p>
                  <p className="Showroom-Card-Text">Unit #204</p>
                  <p className="Showroom-Card-Text">Saddle Brook</p>
                  <p className="Showroom-Card-Text">07663-5708</p>
                  <p className="Showroom-Card-Text">Phone: 201 727 9110</p>
                  <p className="Showroom-Card-Text">Fax: 201 727 9112</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">Waldners Business Environments</p>
                  <p className="Showroom-Card-Text">215 Lexington Avenue 9th Floor</p>
                  <p className="Showroom-Card-Text">New York</p>
                  <p className="Showroom-Card-Text">10016-6023</p>
                  <p className="Showroom-Card-Text">Phone: 212 888 9999</p>
                  <p className="Showroom-Card-Text">Fax: 212 888 9999</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">Empire Office Inc.</p>
                  <p className="Showroom-Card-Text">105 Madison Avenue 15 th Floor</p>
                  <p className="Showroom-Card-Text">New York</p>
                  <p className="Showroom-Card-Text">10016-8810</p>
                  <p className="Showroom-Card-Text">Phone: 212 607 5500</p>
                  <p className="Showroom-Card-Text">Fax: 212 607 5654</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">AFD Contract Furniture Inc.</p>
                  <p className="Showroom-Card-Text">AFD Contract Furniture Inc. 810 Seventh Avenue</p>
                  <p className="Showroom-Card-Text">New York</p>
                  <p className="Showroom-Card-Text">10019-5818</p>
                  <p className="Showroom-Card-Text">Phone: 212 721 7100</p>
                  <p className="Showroom-Card-Text">Fax: 212 721 7175</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
              <div className="Showroom-Card">
                <div className="Showroom-CardLeft">
                  <p className="Showroom-Card-Title">Concepts Office Furnishings</p>
                  <p className="Showroom-Card-Text">
280 North Midland Avenue Building J
                  </p>
                  <p className="Showroom-Card-Text">Unit #204</p>
                  <p className="Showroom-Card-Text">Saddle Brook</p>
                  <p className="Showroom-Card-Text">07663-5708</p>
                  <p className="Showroom-Card-Text">Phone: 201 727 9110</p>
                  <p className="Showroom-Card-Text">Fax: 201 727 9112</p>
                </div>
                <div className="Showroom-CardRight">
                  <p className="Showroom-Card-Text">Authorized The Washington Design Center Showroom, GSA</p>
                  <div className="Showroom-Card-Button">
                  Get Directions
                  </div>
                </div>
              </div>
            </Scroll>
          </div>
          <div className="Showroom-Map">
            <WrapperMap googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCs0Ihg3HbUUw-Ub47aH9uqTPdwpPPHQGc" loadingElement={<div style={{ height: '100%' }} />} containerElement={<div style={{ height: '100%' }} />} mapElement={<div style={{ height: '100%' }} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
