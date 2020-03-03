import React, { useState, useEffect, useContext } from "react"
import SearchPlace from "../components/SearchPlace/SearchPlace"
import Select from '../components/Select/Select';
import "../styles/HouseAdView.css"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"

const HouseAdView = props => {
    const style = {
        
    }

    console.log("HouseAdView.props.match.params.theid=",props.match.params.theid)

    const { store, actions } = useContext(Context);

    console.log("HouseAdView");
    console.log(store.location.lat)
    console.log(store.location.lng)


    const [id, setId] = useState(null);
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');



    const [countries, setCountries] = useState(["Choose Country"])
    //const [selectedOption, setSelectedOption] = useState("")
    const [name, setName] = useState("")

    const [entirehome, setEntirehome] = useState("true")
    const [bedrooms, setBedrooms] = useState(1)
    const [beds, setBeds] = useState(1)
    const [baths, setBaths] = useState(0)
    const [numberOfHosts, setNumberOfHosts] = useState(1)

    const [firstLoad, setFirstLoad] = useState(true)


    if(props.match.params.theid && firstLoad) {
        getHouse(props.match.params.theid);
        setFirstLoad(false)
    } 
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
            //setCountry("Algeria")
            //console.log("===>selectedOption", selectedOption)
            console.log(countries)
        })
        .catch(error => {
            //error handling
            console.log(error);
        })


    }

    function handleChange(e, func) {
        console.log("***handleChange")
        const {value} = e.target;
        console.log(e.target.id,":",value);
        func(value);
    }

    function getHouse(id) {
        console.log("getHouse")
        console.log("process.env.URL_HOUSE_AD", process.env.REACT_APP_URL_HOUSE_AD)
        let urlHouseAd = process.env.REACT_APP_URL_HOUSE_AD +'/houseads/'+id
        console.log("urlHouseAd", urlHouseAd)

        fetch(urlHouseAd , {
            method: "GET"      
        })
        .then(resp => {
            console.log(resp)
            console.log(resp.ok)
            console.log(resp.status)
            return resp.json()
        })
        .then(data => {
            console.log(data)

            setId(data.id)
            setCountry(data.country)
            setAddress(data.address)
            actions.setAddress(data.address)
            actions.setLatLng(
                {
                    "lat": data.latitude,
                    "lng": data.longitude
                }
            )
        
            setComplement(data.complement)
            setCity(data.city)
            setState(data.state)
            setZipCode(data.zipcode)
            setName(data.name)
            setEntirehome(data.entirehome ? "true" : "false" )
            setBedrooms(data.bedrooms)
            setBeds(data.beds)
            setBaths(data.baths)
            setNumberOfHosts(data.numberOfHosts)
        

        })
        .catch(error => {
            //error handling
            console.log(error);
        })
    }



    function handleSubmit(e) {
        console.log("****>HouseAdView.handleSubmit!")
        
        e.preventDefault();
        //const data = new FormData();
        let data = {}
        data["name"] = name
        data["address"] =  store.address
        data["city"] = city
        data["complement"] = complement
        data["country"] = country
        data["latitude"] = store.location.lat
        data["longitude"] = store.location.lng
        data["state"] = state
        data["zipcode"] = zipCode

        data["entirehome"] = (entirehome == "true")
        data["bedrooms"] = bedrooms
        data["beds"] = beds
        data["baths"] = baths
        data["numberOfHosts"] = numberOfHosts


        console.log(data)
        console.log("@@@@@")

        console.log(process.env.REACT_APP_GOOGLE_KEY)
        console.log(process.env.REACT_APP_URL_HOUSE_AD)
        console.log("process.env.URL_HOUSE_AD", process.env.REACT_APP_URL_HOUSE_AD)

        let urlHouseAd = process.env.REACT_APP_URL_HOUSE_AD
        if (id === null) {
            fetch(urlHouseAd +'/houseads', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
            })
            .then(resp => resp.json())
            .then(data => console.log(data));
        } else {
            console.log(">>>PUT:", urlHouseAd +'/houseads/'+id)
            fetch(urlHouseAd +'/houseads/'+id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
            })
            .then(resp => resp.json())
            .then(data => console.log(data));

        }

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
                    <form style={style}>


                        <div className="form-group">
                            <label htmlFor="identification" className="form-label">Name your place:</label>
                            <input type="text" name="name" id="name" value={name}
                                className="form-control"
                                onChange={(e) => handleChange(e, setName)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="" className="form-label">Country:</label>
                            
                            <Select arrayOfData={countries} selectedOption={country} onSelectChange={handleChange} setValueFunc={setCountry}/>
 
                        </div>


                        <div className="form-group">
                            <label htmlFor="address" className="form-label">Street address:</label>
                            <SearchPlace  address={address}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="complement" className="form-label">Apt, suite. (optional):</label>
                            <input type="text" name="complement" id="complement"
                                className="form-control"
                                onChange={(e) => handleChange(e, setComplement)}
                                value={complement}
                            />
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="complement" className="form-label">City:</label>
                            <input type="text" name="city" id="city"
                                className="form-control"
                                onChange={(e) => handleChange(e, setCity)}
                                value={city}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="complement" className="form-label">State:</label>
                            <input type="text" name="state" id="state"
                                className="form-control"
                                onChange={(e) => handleChange(e, setState)}
                                value={state}
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="zipCode" className="form-label">Zipcode:</label>
                            <input type="text" name="zipCode" id="zipCode"
                                className="form-control"
                                onChange={(e) => handleChange(e, setZipCode)}
                                value={zipCode}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="entirehome" className="form-label">Entire Home?</label> <br/>


                            <input type="radio"  id="entirehome" name="entirehome" value="true"  checked = {entirehome=="true"}   onChange={(e) => handleChange(e, setEntirehome)}/>
                            <label htmlFor="male">&emsp;Yes &emsp;&emsp;</label>

                            <input type="radio"  id="entirehome" name="entirehome" value="false" checked = {entirehome=="false"}   onChange={(e) => handleChange(e, setEntirehome)}/>
                            <label htmlFor="male">&emsp;No</label>


                        </div>

                        <div className="form-group">
                            <label htmlFor="bedrooms" className="form-label">Number of Bedrooms:</label>
                            <input type="text" name="bedrooms" id="bedrooms"
                                className="form-control"
                                onChange={(e) => handleChange(e, setBedrooms)}
                                value={bedrooms}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="beds" className="form-label">Number of Beds:</label>
                            <input type="text" name="beds" id="beds"
                                className="form-control"
                                onChange={(e) => handleChange(e, setBeds)}
                                value={beds}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="baths" className="form-label">Number of Baths:</label>
                            <input type="text" name="baths" id="baths"
                                className="form-control"
                                onChange={(e) => handleChange(e, setBaths)}
                                value={baths}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="numberOfHosts" className="form-label">Number of hosts:</label>
                            <input type="text" name="numberOfHosts" id="numberOfHosts"
                                className="form-control"
                                onChange={(e) => handleChange(e, setNumberOfHosts)}
                                value={numberOfHosts}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary btn-block" onClick={e => handleSubmit(e)}>Save</button>
                            <Link className="btn btn-primary btn-block" to="/">
						       Cancel
					        </Link>

                        </div>
                    </form>


                </div>
                
            </div>
        </div>
    )
}

export default HouseAdView