import React, { useState, useEffect } from "react"
import SearchPlace from "../SearchPlace/SearchPlace"
import "./Listing.css"

const Listing = props => {
    const style = {
        
    }


    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    /*const [sexo, setSexo] = useState('M');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [source, setSource] = useState('');
    */

    function handleChange(e, func) {
        const {value} = e.target;
        console.log(e.target.id,":",value);
        func(value);
    }

    function handleSubmit(e) {
        console.log("****>handleSubmit")
        
        e.preventDefault();
        const data = new FormData();
        data.append("country", country);
        data.append("address", address);
        data.append("complement", complement);
        data.append("city", city);
        data.append("state", state);
        data.append("zipCode", zipCode);

        console.log(data)

        /*fetch(url, {
            method: 'POST', // 'PUT'
            body: data
        }).then().then().catch()*/

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Register Form</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={e => this.handleSubmit(e)} style={style}>

                        <div className="form-group">
                            <label htmlFor="" className="form-label">Country:</label>
                            <select name="country" id="country" className="form-control" onChange={(e) => handleChange(e, setCountry)}>
                                <option value="">SELECCIONE</option>
                                <option value="ARGENTINA">ARGENTINA</option>
                                <option value="CHILE">CHILE</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="address" className="form-label">Street address:</label>
                            <SearchPlace />
                        </div>

                        <div className="form-group">
                            <label htmlFor="complement" className="form-label">Apt, suite. (optional):</label>
                            <input type="text" name="complement" id="complement"
                                className="form-control"
                                onChange={(e) => handleChange(e, setComplement)}
                            />
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="complement" className="form-label">City:</label>
                            <input type="text" name="city" id="city"
                                className="form-control"
                                onChange={(e) => handleChange(e, setCity)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="complement" className="form-label">State:</label>
                            <input type="text" name="state" id="state"
                                className="form-control"
                                onChange={(e) => handleChange(e, setState)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="zipCode" className="form-label">ZIP code:</label>
                            <input type="text" name="zipCode" id="zipCode"
                                className="form-control"
                                onChange={(e) => handleChange(e, setZipCode)}
                            />
                        </div>

                    </form>


                </div>
                
            </div>

            <div className="row">
            <div className="col-md-6 mx-auto">
                    <button className="btn btn-primary btn-block" onClick={e => handleSubmit(e)}>Send</button>
            </div>
            </div>

        </div>
    )
}

export default Listing