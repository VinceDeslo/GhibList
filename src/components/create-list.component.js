import React, {Component} from 'react';
import axios from 'axios';

export default class CreateList extends Component{

    constructor(props){
        super(props);

        this.onChangeListDescription = this.onChangeListDescription.bind(this);
        this.onChangeListOwner = this.onChangeListOwner.bind(this);
        this.onChangeListPriority = this.onChangeListPriority.bind(this);
        this.onChangeListCompleted= this.onChangeListCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            list_description: '',
            list_owner: '',
            list_priority: '',
            list_completed: ''
        }
    }

    onChangeListDescription(e){
        this.setState({
            list_description: e.target.value
        });
    }

    onChangeListOwner(e){
        this.setState({
            list_owner: e.target.value
        });
    }

    onChangeListPriority(e){
        this.setState({
            list_priority: e.target.value
        });
    }

    onChangeListCompleted(e){
        this.setState({
            list_completed: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        console.log('Form submitted:');
        console.log('List Description: $[this.state.list_description]');
        console.log('List Owner: $[this.state.list_owner]');
        console.log('List Priority: $[this.state.list_priority]');

        const newList = {
            list_description: this.state.list_description,
            list_owner: this.state.list_owner,
            list_priority: this.state.list_priority,
            list_completed: this.state.list_completed
        }

        // Connection to back-end
        axios.post('http://localhost:4000/ghiblists/add', newList)
             .then(res => console.log(res.data));

        this.setState({
            list_description: '',
            list_owner:'',
            list_priority: '',
            list_completed: false
        });
    }

    render(){
        return(
            <div style = {{marginTop: 10}}>
                <h3>Create New List</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className = "form-group">
                        <label>Description:</label>
                        <input type = "text"
                               className = "form-control"
                               value = {this.state.list_description}
                               onChange = {this.onChangeListDescription}
                        />
                    </div>

                    <div className = "form-group">
                        <label>Owner:</label>
                        <input type = "text"
                               className = "form-control"
                               value = {this.state.list_owner}
                               onChange = {this.onChangeListOwner}
                        />
                    </div>
                        
                    <div className = "form-group">
                        <div className = "form-check formp-check-inline">
                            <input className = "form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.list_priority=="Low"}
                                    onChange={this.onChangeListPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className = "form-check formp-check-inline">
                            <input className = "form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.list_priority=="Medium"}
                                    onChange={this.onChangeListPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className = "form-check formp-check-inline">
                            <input className = "form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.list_priority=="High"}
                                    onChange={this.onChangeListPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div>
                        <input type ="submit" value ="Create List" className = "btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}