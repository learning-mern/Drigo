import React from 'react'
import "./landing.css";


export default class Landing extends React.Component {
    constructor(props){
        super(props);
        this.handleBookJourney = this.handleBookJourney.bind(this);
        this.handleDrigo = this.handleDrigo.bind(this);
    }

    handleBookJourney = () => {
        this.props.history.push('./book-a-journey/login')
    }

    handleDrigo = () => {
        this.props.history.push('./i-am-a-drigo/login')
    }

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <p className = "logo"> Drigo </p>
                <p className = "welcome"> Welcome to Drigo! </p>
                <p className = "login" onClick = {this.handleBookJourney}> Book a Journey </p>
                <p className = "signup" onClick = {this.handleDrigo}> I am a Drigo! </p>
            </div>
        )
    }
}
