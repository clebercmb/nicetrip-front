import React from "react"
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"


function Map () {
    return( 
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat:45.421532, lng:-75.697189}}
        />

         
    )

}

/*
const WrappedMap = withScriptjs (withGoogleMap (Map)) 

const MapContainer = props => {
    return (
        <div style={{width:'100vw', height:'100vh'}}>
            <WrappedMap
                googleMapURL = {"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
                loadingElement = {<div style={{ height: "100%" }} />}
                containergElement = {<div style={{ height: "100%" }} />}
                mapElement = {<div style={{ height: "100%" }} />}

            />
        </div>
    )
}

export default MapContainer
*/


const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapContainer() {
    console.log("**********")
    console.log(process.env.REACT_APP_GOOGLE_KEY)
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
        <MapWrapped
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBii8X-mMfdbKfRgTx_4RNpB3-KiSGvjd4`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
        </div>
    );
}