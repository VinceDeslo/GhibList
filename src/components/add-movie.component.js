import React, {Component} from 'react';
import axios from 'axios';

export default class AddMovie extends Component{

    constructor(props){
        super(props);

        // Data bindings
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieDescription = this.onChangeMovieDescription.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePriority = this.onChangeMoviePriority.bind(this);
        this.onChangeMovieWatched= this.onChangeMovieWatched.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Initial state
        this.state = {
            movie_name: '',
            movie_description: '',
            movie_year: '',
            movie_priority: '',
            movie_watched: ''
        }
    }

    // Event handling for item modification
    onChangeMovieName(e){
        this.setState({
            movie_name: e.target.value
        });
    }

    onChangeMovieDescription(e){
        this.setState({
            movie_description: e.target.value
        });
    }

    onChangeMovieYear(e){
        this.setState({
            movie_year: e.target.value
        });
    }

    onChangeMoviePriority(e){
        this.setState({
            movie_priority: e.target.value
        });
    }

    onChangeMovieWatched(e){
        this.setState({
            movie_watched: e.target.value
        });
    }

    // Event handling for new item creation
    onSubmit(e){
        e.preventDefault();

        console.log('Form submitted:');
        console.log('Movie Description: $[this.state.movie_description]');
        console.log('Movie Year: $[this.state.movie_year]');
        console.log('Movie Priority: $[this.state.movie_priority]');
        console.log('Movie Watched: $[this.state.movie_watched]');

        const newMovie = {
            movie_description: this.state.movie_description,
            movie_year: this.state.movie_year,
            movie_priority: this.state.movie_priority,
            movie_watched: this.state.movie_watched
        }

        // Connection to back-end for adding new lists
        axios.post('http://localhost:4000/ghiblists/add', newMovie)
             .then(res => console.log(res.data));

        // State initialization
        this.setState({
            movie_name: '',
            movie_description: '',
            movie_year:'',
            movie_priority: '',
            movie_watched: false
        });
    }

    // React UI rendering
    render(){
        return(
            <div style = {{marginTop: 10}}>
                <h3>Add New Movie</h3>
                <form onSubmit={this.onSubmit}>
                    
                     <div className = "form-group">
                        <label>Name:</label>
                        <input type = "text"
                               className = "form-control"
                               value = {this.state.movie_name}
                               onChange = {this.onChangeMovieName}
                        />
                    </div>

                    <div className = "form-group">
                        <label>Description:</label>
                        <input type = "text"
                               className = "form-control"
                               value = {this.state.movie_description}
                               onChange = {this.onChangeMovieDescription}
                        />
                    </div>

                    <div className = "form-group">
                        <label>Year:</label>
                        <input type = "text"
                               className = "form-control"
                               value = {this.state.movie_year}
                               onChange = {this.onChangeMovieYear}
                        />
                    </div>
                        
                    <div className = "form-group">
                        <div className = "form-check formp-check-inline">
                            <input className = "form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.movie_priority=="Low"}
                                    onChange={this.onChangeMoviePriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className = "form-check formp-check-inline">
                            <input className = "form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.movie_priority=="Medium"}
                                    onChange={this.onChangeMoviePriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className = "form-check formp-check-inline">
                            <input className = "form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.movie_priority=="High"}
                                    onChange={this.onChangeMoviePriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div>
                        <input type ="submit" value ="Add Movie" className = "btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}