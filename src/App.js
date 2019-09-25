import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateList from "./components/create-list.component";
import EditMovies from "./components/edit-movies.component";
import MoviesList from "./components/movies-list.component";

import logo from "./logo.png";

class App extends Component{
  render(){
    return(
      <Router>
    
        <div className = "container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a class= "navbar-brand" href="gttps://ghiblist.com" target="_blank">
              <img src={logo} width="90" height="90" alt="GhibList.com" />
            </a>

            <Link to="/" className="navbar-brand">Ghiblist</Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Movies</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create List</Link>
                </li>
              </ul>
            </div>

          </nav>
          <br/>

          <Route path="/" exact component = {MoviesList}/>
          <Route path="/edit:id" exact component = {EditMovies}/>
          <Route path="/create" exact component = {CreateList}/>
        </div>

      </Router>
    );
  }
}

export default App;
