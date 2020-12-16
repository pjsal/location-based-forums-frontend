import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Segment, Container } from 'semantic-ui-react';

const mapStyles = {
  // position: 'relative', 
  width: '50%',
  height: '50%'
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

  onMarkerClick = (props, marker, e) => {
    // console.log("Marker clicked")
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  render() {

    // Conditional rendering - no markers should be displayed if there aren't any forums nearby
    let allNearbyForums = <Marker/>
    // If forums ARE nearby
    if (this.props.forums.length > 0) {
      // Create markers for each one
      allNearbyForums = this.props.forums.map((forum, index) => {
        return <Marker 
                    onClick={this.onMarkerClick}
                    name={forum.name}
                    userCount={forum.users.length}
                    postCount={forum.posts.length}
                    position={{lat: forum.latitude, lng: forum.longitude}}
                />

        });
    }

    console.log('allNearbyForums', allNearbyForums)



    return (
      <Container style={{width: '100%', height: '400px'}}>
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
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h3>{this.state.selectedPlace.name}</h3>
                <p>Users: {this.state.selectedPlace.userCount}</p>
                <p>Posts: {this.state.selectedPlace.postCount}</p>
              </div>
          </InfoWindow>
        </Map>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(ForumMap);