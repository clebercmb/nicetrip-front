import React, { useState, useContext } from "react"
import House from "../components/House/House"
import MapContainer from "../components/MapContainer/MapContainer"
import "../styles/HouseListView.css"
import { Context } from "../store/appContext";

const HouseListView = props => { 


    const { store, actions } = useContext(Context);

    console.log("HouseListView");
    console.log(store.location.lat)
    console.log(store.location.lng)

    return (
        <div className="container-fluid HouseListView">
            <div className="row">
                <div className="col-7">
                    <House
                        img = {"/img/houses/cleber_house1_img_1.webp"}
                        type = {"Private room"}
                        title = {"Pop House 4min walk to L train 12mins to Manhatan"}
                        description1 = {"4 guests - 1 bedrrom - 1 bed - 2 shared baths"}
                        description2 = {"Wifi - Kitchen - Air conditioning"}
                        price = {"$26 / nigth"}
                    />

                    <House
                        img = {"/img/houses/cleber_house2_img_1.webp"}
                        type = {"Private room"}
                        title = {"Pop House 4min walk to L train 12mins to Manhatan"}
                        description1 = {"4 guests - 1 bedrrom - 1 bed - 2 shared baths"}
                        description2 = {"Wifi - Kitchen - Air conditioning"}
                        price = {"$26 / nigth"}
                    />

                    <House
                        img = {"/img/houses/cleber_house3_img_1.webp"}
                        type = {"Private room"}
                        title = {"Pop House 4min walk to L train 12mins to Manhatan"}
                        description1 = {"4 guests - 1 bedrrom - 1 bed - 2 shared baths"}
                        description2 = {"Wifi - Kitchen - Air conditioning"}
                        price = {"$26 / nigth"}
                    />
                    <House
                        img = {"/img/houses/cleber_house4_img_1.webp"}
                        type = {"Private room"}
                        title = {"Pop House 4min walk to L train 12mins to Manhatan"}
                        description1 = {"4 guests - 1 bedrrom - 1 bed - 2 shared baths"}
                        description2 = {"Wifi - Kitchen - Air conditioning"}
                        price = {"$26 / nigth"}
                    />

                    <House
                        img = {"/img/houses/cleber_house4_img_1.webp"}
                        type = {"Private room"}
                        title = {"Pop House 4min walk to L train 12mins to Manhatan"}
                        description1 = {"4 guests - 1 bedrrom - 1 bed - 2 shared baths"}
                        description2 = {"Wifi - Kitchen - Air conditioning"}
                        price = {"$26 / nigth"}
                    />
                </div>
                <div className="col-5 HouseListView-Map" >
                    <MapContainer
                        styles = {{width:"400px", height: "400px", position: "fixed"}}
                        location = {{lat:store.location.lat, lng:store.location.lng}}
                        zoom = {13}
                    />
                </div>
            </div>



        </div>

   

    )


}

export default HouseListView

//location = {{lat:store.location.lat, lng:store.location.lng}}
// location = {{lat:40.712776, lng:-74.005974}}
// location = {{lat:-30.0002315, lng:136.2091547}}
//location = {store.location}