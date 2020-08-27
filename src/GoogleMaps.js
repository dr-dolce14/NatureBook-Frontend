import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


import './App.css';

 function thisMap() {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 35.233749, lng: -82.734299 }} />
}
const WrappedMap = withScriptjs(withGoogleMap(thisMap))

export default function GoogleMaps() {
    return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
      loadingElement={<div style={{ height: '100%'}} />}
      containerElement={<div style={{ height: '100%'}} /> }
      mapElement={<div style={{ height: '100%'}} />}
      />
    </div>
    )
  }