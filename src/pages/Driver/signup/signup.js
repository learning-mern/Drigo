import React from 'react'
import "./signup.css";


export default class IamADrigoSignup extends React.Component {

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <p className = "logo"> Drigo </p>
                <div style = {{width: "280px", height: "510px"}} className = "loginDiv">
                    <form className="loginForm" noValidate>
                        <h1 class="">hey buddy !!</h1>
                        <input
                            type="name"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="NAME"
                            required
                            value = ""
                            autofocus />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-control"
                            placeholder="EMAIL ADDRESS"
                            required
                            value = ""
                            autofocus />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            class="form-control"
                            placeholder="PASSWORD"
                            value = ""
                            required />
                        <input
                            type="vehicleNum"
                            id="vehicleNum"
                            name="vehicleNum"
                            class="form-control"
                            placeholder="VEHICLE NUMBER"
                            value = ""
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
