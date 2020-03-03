import React, { useState, useContext, useEffect } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { Context } from "../../store/appContext";

import "./SearchPlace.css"

export default function SearchPlace(props) {

    console.log("***SearchPlace.props.address=", props.address)
    const [address, setAddress] = React.useState(props.address ? props.address : "" );
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });



    const { store, actions } = useContext(Context);

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);

        console.log("value===", value)
        setCoordinates(latLng);

        actions.setLatLng(latLng)
        actions.setAddress(value)

    };

    return (
        <div className="SearhPlace">

            <PlacesAutocomplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                       
                        <input  className="form-control" {...getInputProps({ placeholder: "Type address" })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}

/*

 <p>Latitude: {coordinates.lat}</p>
                        <p>Longitude: {coordinates.lng}</p>
*/