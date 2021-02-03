import React from 'react'
import "./searchBar.css";
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';


export default class SearchBar extends React.Component {

    render(){
        return(
            <div style = {{width: "50vw", height: "40px"}} className = "searchBar">
                <input
                    type="search"
                    id="search"
                    name="search"
                    class="form-control"
                    placeholder="SEARCH"
                    required
                    value = ""
                    autofocus />
            </div>
        )
    }
}
