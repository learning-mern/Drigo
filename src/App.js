import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Home from './pages/home/home';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                    exact
                    path = "/"
                    render = { props => <Home {...props}/>}/>
                </Switch>
            </Router>
        )
    }
}

export default App
