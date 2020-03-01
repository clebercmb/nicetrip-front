import React, { useState, useEffect, useContext } from "react"
import SearchPlace from "../components/SearchPlace/SearchPlace"
import Select from '../components/Select/Select'
import "../styles/HouseAdView.css"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

const HouseAdCRUDView = props => {
    const style = {
        
    }

    const { store, actions } = useContext(Context);

    console.log("HouseAdView");
    console.log(store.location.lat)
    console.log(store.location.lng)


    
    const [isChecked, setIsChecked] = useState(true)


    const [id, setId] = useState("0")
    const [country, setCountry] = useState('A')
    const [address, setAddress] = useState('')
    const [complement, setComplement] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [countries, setCountries] = useState(["Choose Country"])
    const [name, setName] = useState("")

    const [selectedOption, setSelectedOption] = useState("")
 

    const [houseAdList,setHouseAdList] = useState([])

    const [enableButtonRemoved,setEnableButtonRemoved] = useState(true)

    useEffect(() => {
        getHouses()
    }, [])

    // https://api.printful.com/countries

    console.log("process.env.URL_HOUSE_AD", process.env.REACT_APP_URL_HOUSE_AD)
    let urlHouseAd = process.env.REACT_APP_URL_HOUSE_AD

    function getHouses() {
        console.log("getCountries")
        fetch(urlHouseAd +'/houseads', {
            method: "GET"      
        })
        .then(resp => {
            console.log(resp)
            console.log(resp.ok)
            console.log(resp.status)
            return resp.json()
        })
        .then(data => {
            //let houseAdList = [data.map(item => ({id:item.id, name:item.name}))]
            
            //setHouseAdList(houseAdList)
            //setCountry("Algeria")
            //console.log("===>selectedOption", selectedOption)
            //console.log(houseAdList)



            let houseAdList = data.map( (data, i) => 
                <div className="form-group" key={i}>
                    <input type="radio" id={"d"+data.id} name="house" value={data.id} onClick={(e) => handleChange(e, setId)}/>
                    <label htmlFor="house">&emsp;{data.name}</label>
                </div>
            )

            setHouseAdList(houseAdList)

        })
        .catch(error => {
            //error handling
            console.log(error);
        })


    }

    function handleChange(e, func) {
        console.log("***handleChange")
        const {value} = e.target;
        console.log(">>>e", e)
        console.log(e.target.id,":",value);
        if (value > 0) { 
            setEnableButtonRemoved (false)
            setIsChecked(false)
        }
        else {
            setEnableButtonRemoved (true)
            setId(0)
        }

        func(value);
    }

    function handleSubmit(e) {
        console.log("****>HouseAdCRUDView.handleSubmit!")
        
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

        console.log(data)
        console.log("@@@@@")

        console.log(process.env.REACT_APP_GOOGLE_KEY)
        console.log(process.env.REACT_APP_URL_HOUSE_AD)
        console.log("process.env.URL_HOUSE_AD", process.env.REACT_APP_URL_HOUSE_AD)


        let url = process.env.REACT_APP_URL_HOUSE_AD


        let urlHouseAd = process.env.REACT_APP_URL_HOUSE_AD+'/houseads/'+ (id==0 ? "" : id)

        console.log("urlHouseAd:", urlHouseAd)

         if (id === null) {
            fetch('/houseads', {
                method: "DELETE",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(resp => console.log(resp.status)).catch(error => {
                //error handling
                console.log(error);
               
            });
        } 
    }

    function handleSubmitRemove(e) {
        console.log("****>HouseAdView.handleSubmit!")
  
        e.preventDefault();
        //const data = new FormData();

        console.log("process.env.URL_HOUSE_AD", process.env.REACT_APP_URL_HOUSE_AD)
        console.log("handleSubmitRemove->id",id)

        let urlHouseAd = process.env.REACT_APP_URL_HOUSE_AD+'/houseads/'+id
        console.log("urlHouseAd", urlHouseAd)
        if (id != 0) {
            fetch(urlHouseAd, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(resp => {

                console.log(resp.status); 
                console.log();
                setId(0)
                setEnableButtonRemoved (true); 
                setIsChecked(true)
                getHouses(); 
            }).catch(error => {
                //error handling
                console.log(error);
               
            });
        }


    }

    return (
        <div className="container">

            <div className="row justify-content-center">

                <div className="col-md-12 text-center">
                    <h3>How would like to start?</h3>
                </div>
                <div className="col-md-6 mx-auto">

                    <form style={style}>
                        <div className="form-group">
                            <input type="radio"  id="d0" name="house" value="0" checked={id == "0"}  onClick={(e) => handleChange(e, setId)}/>
                            <label htmlFor="male">&emsp;Create a new listing</label>
                        </div>

                        <div className="text-left">
                            <h5>Yours listing</h5>
                        </div>

                        {houseAdList}
                         

                        <div className="text-left">
 
                            <Link className="btn btn-primary btn-block" to={'/housead/'+(id == 0 ? "" : id)}>
						       Next
					        </Link>

                            <button id="delete" disabled={enableButtonRemoved} className="btn btn-primary btn-block" onClick={e => handleSubmitRemove(e)}>Remove</button>
                        </div>

                    </form>


                </div>
                
            </div>
        </div>
    )
}

export default HouseAdCRUDView