import React, { useState, useContext } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { Context } from "../../store/appContext";

import "./SearchPlace.css"

export default function SearchPlace() {
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const { store, actions } = useContext(Context);

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);

        actions.setLatLng(latLng)

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
                       
                        <input {...getInputProps({ placeholder: "Type address" })} />

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