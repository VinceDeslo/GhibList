// General imports
import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as cnst from './constants';

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Component imports
import Login from "./components/login.component";
import Register from "./components/register.component";
import AddMovie from "./components/add-movie.component";
import EditMovie from "./components/edit-movie.component";
import Movies from "./components/movies-list.component";

import logo from "./images/logo.png";

class App extends Component{

  render(){

    return(
      <AuthContext.Provider value={{authTokens, setAuthTokens : setTokens}}>
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

              <ButtonGroup aria-label="User account buttons">
                  <Button variant="outline-secondary" size="sm">
                    <Link 
                      to="/register" 
                      className="nav-link" 
                      style = {{textDecoration : 'none', color: 'grey'}}>
                        Register
                    </Link>
                  </Button>
                  <Button variant="secondary" size="sm" >
                    <Link 
                      to="/login" 
                      className="nav-link" 
                      style = {{textDecoration : 'none', color: 'white'}}>
                        Login
                    </Link>
                  </Button>
              </ButtonGroup>

            </div>

          </nav>
          <br/>

          <Route path="/" exact component = {Movies}/>
          <Route path="/edit/:id" exact component = {EditMovie}/>
          <Route path="/add" exact component = {AddMovie}/>
          <Route path="/login" exact component = {Login}/>
          <Route path="/register" exact component = {Register}/>

        </div>

      </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
