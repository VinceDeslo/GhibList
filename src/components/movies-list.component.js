import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Movie = props => (
    <tr>
        <td>{props.movie.movie_name}</td>
        <td>{props.movie.movie_description}</td>
        <td>{props.movie.movie_year}</td>
        <td>{props.movie.movie_priority}</td>
        <td>{props.movie.movie_watched ? '\u2714' :'-'}</td>
        <td>
            <Link to={"/edit/"+props.movie._id}>Edit</Link>
        </td>
    </tr>
)

export default class Movies extends Component{

    constructor(props){
        super(props);
        this.state = {movies: []};
    }

    // HTTP fetch of the database contents
    componentDidMount(){
        axios.get('http://localhost:4000/ghiblist/')
             .then(response => {
                this.setState({ movies: response.data});
             })
             .catch(function (error){
                console.log(error);
             })
    }

    // Generation of the list
    movieList(){
        return this.state.movies.map(function(currentMovie, i){

            return <Movie movie={currentMovie} key = {i}/>;
        })
    }

    // React UI rendering
    render(){
        return(
            <div>
                <h3>Movies List</h3>
                <table className="table table-striped" style={{ marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Year</th>
                            <th>Priority</th>
                            <th>Watched</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.movieList()}
                    </tbody>
                </table>
            </div>
        )  
    }
}