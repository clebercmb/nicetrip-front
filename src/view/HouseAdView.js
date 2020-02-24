import React, { useState, useEffect, useContext } from "react"
import SearchPlace from "../components/SearchPlace/SearchPlace"
import Select from '../components/Select/Select';
import "../styles/HouseAdView.css"
import { Context } from "../store/appContext";


const HouseAdView = props => {
    const style = {
        
    }

    const { store, actions } = useContext(Context);

    console.log("HouseAdView");
    console.log(store.location.lat)
    console.log(store.location.lng)


    const [country, setCountry] = useState('A');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [countries, setCountries] = useState(["Choose Country"])
    const [selectedOption, setSelectedOption] = useState("")


    /*const [sexo, setSexo] = useState('M');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [source, setSource] = useState('');
    */

    useEffect(() => {
        getCountries()
    }, [])

    // https://api.printful.com/countries
    function getCountries() {
        console.log("getCountries")
        fetch('https://restcountries.eu/rest/v2/all', {
            method: "GET"      
        })
        .then(resp => {
            console.log(resp)
            console.log(resp.ok)
            console.log(resp.status)
            return resp.json()
        })
        .then(data => {
            let countries = [{id:"Choose Country", name:"Choose Country"}, ...data.map(item => ({id:item.name, name:item.name}))]
            
            setCountries(countries)
            setCountry("Algeria")
            console.log("===>selectedOption", selectedOption)
            console.log(countries)
        })
        .catch(error => {
            //error handling
            console.log(error);
        })


    }

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
                    <form  onSubmit={e => handleSubmit(e)} style={style}>

                        <div className="form-group">
                            <label htmlFor="" className="form-label">Country:</label>
                            
                            <Select arrayOfData={countries} selectedOption={country} onSelectChange={handleChange} setValueFunc={setCountry}/>
 
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

export default HouseAdView