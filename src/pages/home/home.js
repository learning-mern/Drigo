import React from 'react'
import "./home.css";


export default class Home extends React.Component {
    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <p className = "logo"> Drivo </p>
                <p className = "welcome"> Welcome to Drivo! </p>
                <p className = "login"> Login </p>
                <p className = "signup"> Signup </p>
            </div>
        )
    }
}
