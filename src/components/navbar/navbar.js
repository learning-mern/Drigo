import React from 'react'
import "./navbar.css";


export default class Navbar extends React.Component {

    render(){
        return(
            <div style = {{width: "100px", height: "100vh"}} className = "navbar">
                <div style = {{width: "20px", height: "20px", marginLeft: "30px", marginTop: "20px"}} className = "logo"></div>
                <i class="fas fa-user"></i>
                <p className="user">Profile</p>
                <i class="fas fa-home"></i>
                <p className="home">Home</p>
                <i class="fas fa-search"></i>
                <p className="search">Search</p>
                <i class="fas fa-power-off"></i>
                <p className="logOut">Log Out</p>
            </div>
        )
    }
}
