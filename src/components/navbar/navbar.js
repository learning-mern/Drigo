import React from 'react'
import "./navbar.css";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import firebase from "../../services/firebase";


export default class Navbar extends React.Component {

    constructor(){
        super();
        this.logOut = this.logOut.bind(this);
    }

    logOut = () => {
        this.setState(()=> {
            firebase.auth().signOut();
            localStorage.clear();
        })
    }

    render(){
        return(
            <div style = {{width: "100px", height: "100vh"}} className = "navbar">
                <div style = {{width: "30px", height: "30px", marginLeft: "30px", marginTop: "20px"}} className = "logo1"></div>
                <i class="fas fa-user" ></i>
                <p className="user">Profile</p>
                <i class="fas fa-home"></i>
                <p className="home">Home</p>
                <i class="fas fa-search"></i>
                <p className="search">Search</p>
                <a href="/"><i class="fas fa-power-off" onClick={this.logOut}></i></a>
                <p className="logOut">Log Out</p>
            </div>
        )
    }
}
