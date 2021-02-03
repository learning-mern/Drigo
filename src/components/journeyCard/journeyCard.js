import React from 'react'
import "./journeyCard.css";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';


export default class JourneyCard extends React.Component {

    render(){
        return(
            <div style = {{width: "230px", height: "220px"}} className = "journeyCard">
                <p className="sourceLoc" style = {{color: "#fff"}}> Lucknow </p>
                <div className="toAndFrom">
                    <i class="fas fa-arrow-alt-circle-down"></i>
                    <i class="far fa-arrow-alt-circle-up"></i>
                </div>
                <p className="destination" style = {{color: "#fff"}}> Jodhpur </p>
                <a className="bookNow">Book Now</a>
            </div>
        )
    }
}
