import React from "react"
import "./House.css"


const House = props => {

    return (
        <div className="card mb-3 House">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.img} className="card-img House-img" alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.type}</h5>
                        <p className="card-text">{props.title}</p>
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