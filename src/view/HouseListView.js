import React from "react"
import House from "../components/House/House"
import MapContainer from "../components/MapContainer/MapContainer"
import "../styles/HouseListView.css"

const HouseListView = props => { 

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
                        location = {{lat:40.712776, lng:-74.005974}}
                        zoom = {11}
                    />
                </div>
            </div>



        </div>

   

    )


}

export default HouseListView
