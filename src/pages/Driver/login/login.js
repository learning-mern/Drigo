import React from 'react'
import "./login.css";


export default class IamADrigoLogin extends React.Component {

    render(){
        return(
            <div style = {{width: "100vw", height: "100vh"}} className = "background">
                <p className = "logo"> Drigo </p>
                <div style = {{width: "280px", height: "420px"}} className = "loginDiv">
                    <form className="loginForm" noValidate>
                        <h1 class="">hey yaa !!</h1>
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
                        <button
                            class="login-button"
                            type="submit">
                            Login
                        </button>
                        <p class="mt-5 mb-3 dont-have-acc">Don't have an account?</p>
                        <a href="/i-am-a-drigo/signup" className="signup-btn">Sign Up</a>
                    </form>
                </div>
            </div>
        )
    }
}
