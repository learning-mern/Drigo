import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Landing from './pages/landing/landing';
import BookAJourneyLogin from './pages/Passenger/login/login'
import BookAJourneySignup from './pages/Passenger/signup/signup'
import BookAJourneyHome from './pages/Passenger/home/home'
import IamADrigoLogin from './pages/Driver/login/login'
import IamADrigoSignup from './pages/Driver/signup/signup'
import IamADrigoHome from './pages/Driver/home/home'

class App extends Component {
    render() {
        return (
            <Router>

                <Switch>
                    <Route
                    exact
                    path = "/"
                    render = { props => <Landing {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/book-a-journey/login"
                    render = { props => <BookAJourneyLogin {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/book-a-journey/signup"
                    render = { props => <BookAJourneySignup {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/book-a-journey"
                    render = { props => <BookAJourneyHome {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/i-am-a-drigo/login"
                    render = { props => <IamADrigoLogin {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/i-am-a-drigo/signup"
                    render = { props => <IamADrigoSignup {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/i-am-a-drigo"
                    render = { props => <IamADrigoHome {...props}/>}/>
                </Switch>

            </Router>
        )
    }
}

export default App
