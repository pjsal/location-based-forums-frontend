import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '75%',
  height: '75%'
};

class ForumMap extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      selectedPlace: {},
      activeMarker: {},
      showingInfoWindow: false,
    };
  }


  render() {

    // Conditional rendering - no markers should be displayed if no forums are nearby
    let allNearbyForums = <Marker/>
    // Forums are nearby so...
    if (this.props.forums.length > 0) {
      // Return everyone found
      allNearbyForums = this.props.forums.map((forum, index) => {
            return <Marker 
                    position={{lat: forum.latitude, lng: forum.longitude}}
                    />
        });
    }

    console.log('allNearbyForums', allNearbyForums)



    return (
      <>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          centerAroundCurrentLocation={false}
        >
          {allNearbyForums}
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(ForumMap);