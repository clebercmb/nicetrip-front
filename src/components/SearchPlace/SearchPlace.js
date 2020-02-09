import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

import { Context } from "../../store/appContext";

// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';

const SearchPlace = () => {

    const [address, setState] = useState("");
    const [result, setResult] = useState(null);

   

    const handleSelect = () => {
        console.log("handleSelect")
        console.log(address);
        geocodeByAddress(address)
            .then(results => setResult(results))
            .catch(error => console.error(error));
    }

    return (
        <div>
            <GooglePlacesAutocomplete
                onSelect={({ description }) => {
                    setState(description)
                    console.log(description)
                }}
            />
            {address}
            <button onClick={() => handleSelect()}>Buscar</button>
            {JSON.stringify(result)}
            {address}
            {
                !!result && (
                    <p>
                    { JSON.stringify(JSON.parse(JSON.stringify(result[0].geometry["location"])).lat)}
                    { JSON.stringify(JSON.parse(JSON.stringify(result[0].geometry["location"])).lng)}
                    
                    </p>
                )
            }


        </div>
    );
}

export default SearchPlace

/*
return (
    <div>
        <GooglePlacesAutocomplete
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        value = {address}

        onSelect={handleSelect}
        >
        </GooglePlacesAutocomplete>

    </div>

);
*/


