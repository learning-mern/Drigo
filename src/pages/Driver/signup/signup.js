import React from 'react'
import "./signup.css";
import firebase from "../../../services/firebase"


export default class IamADrigoSignup extends React.Component {

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            vehicleNum: "",
            error: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event){
        const {name, password, email, vehicleNum} = this.state;
        event.preventDefault();
        try{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async result => {
                firebase.firestore().collection('driver').doc('users').collection('users')
                .add({
                    name,
                    email,
                    vehicleNum
                }).then(async result => {
                        localStorage.setItem('name', name);
                        localStorage.setItem('email', email);
                        localStorage.setItem('password', password);
                        localStorage.setItem('vehicleNum', vehicleNum);

                        console.log(localStorage.getItem('name'));
                        console.log(localStorage.getItem('email'));

                        this.props.history.push("./");
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                })
            })
        } catch(error){
            console.error("Error in adding user: ", error);
        }
    }

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <p className = "logo"> Drigo </p>
                <div style = {{width: "280px", height: "510px"}} className = "loginDiv">
                    <form className="loginForm" noValidate onSubmit={this.handleSubmit}>
                        <h1 class="">hey buddy !!</h1>
                        <input
                            type="name"
                            id="name"
                            name="name"
                            class="form-control"
                            placeholder="NAME"
                            required
                            onChange = {this.handleChange}
                            value = {this.state.name}
                            autofocus />
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
                            value = {this.state.password}
                            onChange = {this.handleChange}
                            required />
                        <input
                            type="vehicleNum"
                            id="vehicleNum"
                            name="vehicleNum"
                            class="form-control"
                            placeholder="VEHICLE NUMBER"
                            value = {this.state.vehicleNum}
                            onChange = {this.handleChange}
                            required />
                        <button
                            class="login-button"
                            type="submit">
                            Signup
                        </button>
                        <p class="mt-5 mb-3 dont-have-acc">Already have an account?</p>
                        <a href="/i-am-a-drigo/login" className="signup-btn">Login</a>
                    </form>
                </div>
            </div>
        )
    }
}
