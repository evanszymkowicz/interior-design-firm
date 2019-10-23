import React from 'react';
import './map.scss';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Map() {
  return (
    <div className="Map" />
  );
}
