import React from 'react'
import "./home.css";
import Navbar from "../../../components/navbar/navbar"
import firebase from "../../../services/firebase";
import SearchBar from "../../../components/searchBar/searchBar"


export default class BookAJourneyHome extends React.Component {

    componentDidMount(){
        if(localStorage.getItem('email') && localStorage.getItem('password')){
            console.log(localStorage.getItem('name'));
        } else {
            this.setState(()=> {
                this.props.history.push('/login')
            })
        }
    }

    logOut = () => {
        firebase.auth().signOut();
        this.props.history.push('/');
        localStorage.clear();
    }

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background1">
                <Navbar
                logOut = {this.logOut}/>
                <SearchBar />
            </div>
        )
    }
}
