import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const location = {
address: '807 E 10th St, Davenport, Iowa',
lat: 41.52987,
lng: -90.56317,
}

const mapStyles = {
width: '100%',
height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
  showingInfoWindow: false, // Hides or shows the InfoWindow
  activeMarker: {}, // Shows the active marker upon click
  selectedPlace: {} // Shows the InfoWindow to the selected place upon a marker
  }
  }
    onMarkerClick = (props, marker, e) =>
    this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
    });
    onClose = props => {
    if (this.state.showingInfoWindow) {
    this.setState({
    showingInfoWindow: false,
    activeMarker: null
    });
    }
    };
      render() {
      console.log(this.props.breweries) //longitude and latitude
      return ( 
        <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{ lat: 41.52987, lng: -90.563177 }}
        >
        {this.props.breweries.map(brewery => 
        <Marker
          id={brewery.id}
          key={brewery.id}
          position={{ lat: brewery.latitude, lng: brewery.longitude }}
          onClick={this.onMarkerClick}
          name={brewery.name}
          />
        )}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
        )
    }
}
    
export default GoogleApiWrapper({
apiKey:'AIzaSyAOChd_BejpTuVm1QijYhLbvxuIA9lsLrw'
})(MapContainer);