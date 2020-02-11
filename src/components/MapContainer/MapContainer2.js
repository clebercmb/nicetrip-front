import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

    render() {

        console.log("********")
        console.log(this.props.apiKey)
    
    
        return (
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
            lat: -1.2884,
            lng: 36.8233
            }}
        />
        );
    }
}

/*
export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MapContainer)
*/

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBbcDzKc5IXMFHl6_PKY4L9NCEFnKXx7Xk'
})(MapContainer);