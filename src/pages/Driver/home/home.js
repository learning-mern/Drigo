import React from 'react'
import "./home.css";
import firebase from "../../../services/firebase";
import Navbar from "../../../components/navbar/navbar"


export default class IamADrigoHome extends React.Component {

    componentDidMount(){
        if(localStorage.getItem('email') && localStorage.getItem('password')){
            console.log(localStorage.getItem('name'));
            console.log(localStorage.getItem('vehicleNum'));
        } else {
            this.setState(()=> {
                this.props.history.push('/login')
            })
        }
    }

    logOut = () => {
        firebase.auth().signOut()
        this.props.history.push('/')
        localStorage.clear()
    }

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <Navbar />
                <a className="signup-btn" onClick = {this.logOut}>Log Out</a>
                <p style = {{color: "white"}}>{localStorage.getItem('name')}</p>
            </div>
        )
    }
}
