import React from "react"
import "./House.css"


const House = props => {

    return (
        <div className="card mb-3 border-left-0  border-right-0 rounded-0  House">
            <div className="row ">
                <div className="col-md-4 House-col">
                    <img src={props.img} className="card-img House-img" alt="..."/>
                </div>

                <div className="col-md-8 House-col">
                    <div className="card-body ">
                        <small className="text-muted">{props.type}</small>
                        <p className="card-text ">{props.title}</p>
                        <p className="card-text"><small className="text-muted">{props.description1}</small></p>
                        <p className="card-text"><small className="text-muted">{props.description2}</small></p>
                        <p className="cardetext">{props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )    

}

export default House