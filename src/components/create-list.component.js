import React, {Component} from 'react';

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
        console.log('List Priority: $[]this.state.list_priority');

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
                    <div>
                        
                    </div>
                </form>
            </div>
        )
    }

}