import React from 'react'
import "./home.css";
import firebase from "../../../services/firebase";


export default class BookAJourneyHome extends React.Component {
    constructor(props){
        super(props);
        // this.handlechange = this.handlechange.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        if(localStorage.getItem('email') && localStorage.getItem('password')){
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
                <p className = "logo"> Drigo </p>
                <a className="signup-btn" onClick = {this.logOut}>Log Out</a>
            </div>
        )
    }
}
