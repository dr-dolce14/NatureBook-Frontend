import React, { useState, useEffect} from "react";
import { InfoWindow, GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';
import mapStyles from "./mapStyles";
import Geocode from 'react-geocode'
import AutoComplete from 'react-google-autocomplete';


import './App.css';

import { Descriptions } from 'antd';

function Map(props) {
    console.log(props)
    const [selectedSighting, setSelectedSighting] = useState(null);
  
    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedSighting(null);
        }
      };
      window.addEventListener("keydown", listener);
  
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
  
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 35.233749, lng: -82.734299 }}
        defaultOptions={{ styles: mapStyles }}
      >
      
        {props.data.sightings.map(sighting => (
            console.log(sighting, "im sighting"),
          <Marker
            key={sighting.id}
            position={{
              lat: sighting.lat,
              lng: sighting.lng
            }}
            onClick={() => {
                console.log(sighting, "in onclick")
              setSelectedSighting(sighting);
            }}
            // icon={{
            //   url: `/mountains_icon-icons.com_59773.svg`,
            //   scaledSize: new window.google.maps.Size(25, 25)
            // }}
          />
        ))}
  
        {selectedSighting && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedSighting(null);
            }}
            position={{
              lat: selectedSighting.lat,
              lng: selectedSighting.lng
            }}
          >
            <div>
              <h2>{selectedSighting.location}</h2>
              <p>{selectedSighting.habitat}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
  
  const MapWrapped = withScriptjs(withGoogleMap(Map));
  
  export default function SightingsMap(props) {
      //console.log(props, "where am i props")
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
            data = {props}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_API_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
