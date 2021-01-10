import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Landing from './pages/landing/landing';
import Home from './pages/home/home';
import BookAJourneyLogin from './pages/Passenger/login/login'
import BookAJourneySignup from './pages/Passenger/signup/signup'


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
                    path = "/home"
                    render = { props => <Home {...props}/>}/>
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
                    path = "/i-am-a-drigo/login"
                    render = { props => <Home {...props}/>}/>
                </Switch>

                <Switch>
                    <Route
                    exact
                    path = "/i-am-a-drigo/signup"
                    render = { props => <Home {...props}/>}/>
                </Switch>

            </Router>
        )
    }
}

export default App
