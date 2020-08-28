import React from 'react';
import { InfoWindow, GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import Geocode from 'react-geocode'
import AutoComplete from 'react-google-autocomplete';


import './App.css';

import { Descriptions } from 'antd';

Geocode.setApiKey(process.env.REACT_APP_API_KEY)

class GoogleMaps extends React.Component {

  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
    height: 400,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0
    }
  }

  componentDidMount() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          mapPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          markerPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        },
        () => {
          Geocode.fromLatLng(position.coords.latitude, position.coords.longitude) 
    .then(response => {

      const address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        city = this.getCity(addressArray),
        area = this.getArea(addressArray),
        state = this.getState(addressArray)

        this.setState({
          address: (address) ? address : "",
          area: (area) ? area : "",
          city: (city) ? city : "",
          state: (state) ? state : "",
        })
      })
    })
      })
    }
  }


  getArea = (addressArray) => {
    let city = ''
    for (let index = 0; index < addressArray.length; index++){
      if (addressArray[index].types[0] && 'administrative_area_level_2' === addressArray[index].types[0]) {
        city = addressArray[index].long_name;
        return city;
      }
    }
  }

  getCity = (addressArray) => {
    let area = '';
    for (let index = 0; index < addressArray.length; index++) {
      if (addressArray[index].types[0]) {
        for (let j = 0; j < addressArray.length; j++) {
          if ('sublocality_level_1' === addressArray[index].types[j] || 'locality' === addressArray[index].types[j]) {
            area = addressArray[index].long_name;
            return area
          }
        }
      }
    }
  }

  getState = (addressArray) => {
    let state = '';
    for (let index = 0; index < addressArray.length; index++) {
      for (let index = 0; index < addressArray.length; index++) {
        if (addressArray[index].types[0] && 'administrative_area_level_1' === addressArray[index].types[0]) {
          state = addressArray[index].long_name;
          return state
        }
      }
    }
  }



  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();
    // console.log('newLat', newLat)
    // console.log('newLng', newLng)

    Geocode.fromLatLng(newLat, newLng) 
    .then(response => {

      const address = response.results[0].formatted_address,
        addressArray = response.results[0].address_components,
        city = this.getCity(addressArray),
        area = this.getArea(addressArray),
        state = this.getState(addressArray)

        this.setState({
          address: (address) ? address : "",
          area: (area) ? area : "",
          city: (city) ? city : "",
          state: (state) ? state : "",
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }

        })

    })
  }

  onPlaceSelected = (place) => {
    const address = place.formatted_address,
    addressArray = place.address_components,
    city = this.getCity(addressArray),
    area = this.getArea(addressArray),
    state = this.getState(addressArray),
    newLat = place.geometry.location.lat(),
    newLng = place.geometry.location.lng();
    this.setState({
      address: (address) ? address : "",
      area: (area) ? area : "",
      city: (city) ? city : "",
      state: (state) ? state : "",
      markerPosition: {
        lat: newLat,
        lng: newLng
      },
      mapPosition: {
        lat: newLat,
        lng: newLng
      }

    })
  }

  render() {


    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
      >
        <Marker
          draggable={true}
          onDragEnd={this.onMarkerDragEnd}
          position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
        >
          <InfoWindow
          style={{ width: "100%", height: '40px', paddingLeft: 16, marginTop: 2, marginBottom: '2rem' }}>
            <div>
              <p>Lat: {this.state.markerPosition.lat}</p>
              <p>Lng: {this.state.markerPosition.lng}</p>
            </div>
           
          </InfoWindow>
        </Marker>
        <AutoComplete 
          style={{ width: "100%", height: '40px', paddingLeft: 16, marginTop: 2, marginBottom: '2rem' }}
          types={['(regions)']}
          onPlaceSelected={this.onPlaceSelected}
        />

      </GoogleMap>
    ));


    return (

      <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
        <h1>Map</h1>
      <Descriptions  bordered>
        <Descriptions.Item label="City">{this.state.city}</Descriptions.Item>
        <Descriptions.Item label="Area">{this.state.area}</Descriptions.Item>
        <Descriptions.Item label="State">{this.state.state}</Descriptions.Item>
        <Descriptions.Item label="Address">{this.state.address}</Descriptions.Item>
        <Descriptions.Item label="Latitude">{this.state.markerPosition.lat}</Descriptions.Item>
        <Descriptions.Item label="Longitude">{this.state.markerPosition.lng}</Descriptions.Item>
      </Descriptions>


      <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    )
  }


}

export default GoogleMaps
