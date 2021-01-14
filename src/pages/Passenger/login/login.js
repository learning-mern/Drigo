import React from 'react';
import "./login.css";
import firebase from "../../../services/firebase";


export default class BookAJourneyLogin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        if(localStorage.getItem('email') && localStorage.getItem('password')){
            firebase.auth().signInWithEmailAndPassword(localStorage.getItem('email'), localStorage.getItem('password'))
            .then(
                this.setState(()=> {
                    this.props.history.push('./')
                })
            )
            console.log(localStorage.getItem('name'));
            console.log(localStorage.getItem('email'));
        } else {
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event){
        const {password, email} = this.state;
        event.preventDefault();
        try{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async result => {
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);

                    console.log(localStorage.getItem('email'));

                    this.props.history.push("./");
            })
        } catch(error){
            console.error("Error is: ", error);
        }
    }

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <p className = "logo"> Drigo </p>
                <div style = {{width: "280px", height: "420px"}} className = "loginDiv">
                    <form className="loginForm" noValidate onSubmit={this.handleSubmit}>
                        <h1 class="">hey buddy !!</h1>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="EMAIL ADDRESS"
                            required
                            onChange = {this.handleChange}
                            value = {this.state.email}
                            autofocus />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="PASSWORD"
                            value = ""
                            value = {this.state.password}
                            onChange = {this.handleChange}
                            required />
                        <button
                            class="login-button"
                            type="submit">
                            Login
                        </button>
                        <p class="mt-5 mb-3 dont-have-acc">Don't have an account?</p>
                        <a href="/book-a-journey/signup" className="signup-btn">Sign Up</a>
                    </form>
                </div>
            </div>
        )
    }
}
