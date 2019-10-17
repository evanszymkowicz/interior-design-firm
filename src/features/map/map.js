import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import './_map.scss';

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Map() {
  return (
    <div className='Map'></div>
  )
}
