import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Movie = props => (
    <tr>
        <td>{props.movie.movie_name}</td>
        <td>{props.movie.movie_description}</td>
        <td>{props.movie.movie_year}</td>
        <td>{props.movie.movie_priority}</td>
        <td>{props.movie.movie_completed}</td>
        <td>
            <Link to={"/edit/"+props.movie._id}>Edit</Link>
        </td>
    </tr>
)

export default class Movies extends Component{

    constructor(props){
        super(props);
        this.state = {lists: []};
    }

    // HTTP fecth of the database contents
    componentMounted(){
        axios.get('http://localhost:4000/ghiblists')
             .then(response => {
                this.setState({ lists: response.data});
             })
             .catch(function (error){
                console.log(error);
             })
    }

    // Generation of the list
    movieList(){
        return this.state.lists.map(function(currentList, i){
            return <Movie movie={currentMovie} key = {i}/>;
        })
    }

    // React UI rendering
    render(){
        return(
            <div>
                <table className="table table-striped" style={{ marginTop:20}}>
                    <thead>
                        <tr>
                            <tr>Name</tr>
                            <tr>Description</tr>
                            <tr>Year</tr>
                            <tr>Priority</tr>
                            <tr>Action</tr>
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