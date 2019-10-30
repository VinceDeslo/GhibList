import React, {Component} from 'react';
import axios from 'axios';

export default class EditMovie extends Component{

    constructor(props){
        super(props);

        // Data bindings
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieDescription = this.onChangeMovieDescription.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePriority = this.onChangeMoviePriority.bind(this);
        this.onChangeMovieWatched = this.onChangeMovieWatched.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State initialization
        this.state = {
            movie_name: '',
            movie_description: '',
            movie_year: '',
            movie_priority: '',
            movie_watched: false
        }
    }

    // HTTP call to fetch the specific movie information
    componentDidMount(){
        axios.get('http://localhost:4000/ghiblist/'+this.props.match.params._id)
             .then(response => {
                 this.setState({
                    movie_name: response.data.movie_name,
                    movie_description: response.data.movie_description,
                    movie_year: response.data.movie_year,
                    movie_priority: response.data.movie_priority,
                    movie_watched: response.data.movie_watched
                 })
             })
             .catch(function (error) {
                 console.log(error);
             })
    }

    // Event handlers for user modifications
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
            movie_watched: !this.state.movie_watched
        });
    }

    // Event handler for edit submition
    onSubmit(e){
        e.preventDefault();
       
        const item = {
            movie_name: this.state.movie_name,
            movie_description: this.state.movie_description,
            movie_year: this.state.movie_year,
            movie_priority: this.state.movie_priority,
            movie_watched: this.state.movie_watched
        };
        console.log(item);

        // HTTP update call
        axios.post('http://localhost:4000/ghiblist/update/'+this.props.match.params.id, item)
             .then(res => console.log(res.data));

        // redirect user to main page
        this.props.history.push('/');
    }

    // React UI rendering
    render(){
        return(
            <div>
                <h3 align="center">Edit Movie</h3>
                <form onSubmit={this.onSubmit}>
                  
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.movie_name}
                               onChange={this.onChangeMovieName}
                               />
                    </div> 

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.movie_description}
                               onChange={this.onChangeMovieDescription}
                               />
                    </div> 

                    <div className="form-group">
                        <label>Year: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.movie_year}
                               onChange={this.onChangeMovieYear}
                               />
                    </div> 

                    <div className="form-group">
                       
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityLow"
                                   value="Low"
                                   checked={this.state.movie_priority==='Low'}
                                   onChange={this.onChangeMoviePriority}
                                   />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityMedium"
                                   value="Medium"
                                   checked={this.state.movie_priority==='Medium'}
                                   onChange={this.onChangeMoviePriority}
                                   />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOptions"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.movie_priority==='High'}
                                   onChange={this.onChangeMoviePriority}
                                   />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input"
                               id="watchedCheckbox"
                               type="checkbox"
                               name="watchedCheckbox"
                               onChange={this.onChangeMovieWatched}
                               checked={this.state.movie_watched}
                               value={this.state.movie_watched} 
                               />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Movie" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
        )
    }
}