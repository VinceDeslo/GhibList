import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddMovie from "./components/add-movie.component";
import EditMovie from "./components/edit-movie.component";
import Movies from "./components/movies-list.component";

import logo from "./images/logo.png";

class App extends Component{
  render(){
    return(
      <Router>
    
        <div className = "container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand" href="gttps://ghiblist.com" target="_blank">
              <img src={logo} width="90" height="90" alt="GhibList.com" />
            </a>

            <Link to="/" className="navbar-brand">Ghiblist</Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Movies</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">Add Movie</Link>
                </li>
              </ul>
            </div>

          </nav>
          <br/>

          <Route path="/" exact component = {Movies}/>
          <Route path="/edit/:id" exact component = {EditMovie}/>
          <Route path="/add" exact component = {AddMovie}/>
        </div>

      </Router>
    );
  }
}

export default App;
