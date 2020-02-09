import React, { useContext } from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"
import { Context } from "../../store/appContext";



const MapWrapped = withScriptjs(withGoogleMap((props) => {

    console.log("MapWrapped")
    console.log("props.location", props.location)
    return (
        <GoogleMap
            defaultZoom={props.zoom}
            defaultCenter={props.location}
        />
    )
}
))

//{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}

//const MapWrapped = withScriptjs(withGoogleMap(Map(props)));

export default function MapContainer(props) {
    console.log("MapContainer")
    console.log(process.env.REACT_APP_GOOGLE_KEY)
    console.log(props.location)


    return (
        <div style={props.styles}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={props.location}
                zoom={props.zoom}
            />
        </div>
    );
}

//<div style={{ width: "400px", height: "400px", position: "fi" }}>
