import React, { Component } from 'react';

class NewForum extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: '',
            latitude: null,
            longitude: null,
        };
    }

    handleChange = (e) => { 
        this.setState({[e.currentTarget.name]: e.currentTarget.value,
                        'latitude': this.props.userLat,
                        'longitude': this.props.userLng,
                        'users': [this.props.userId],
        })
    }


    
    render() {
        
        return (
            <>
                <form onSubmit={(e) => this.props.plantNewForum(e, this.state)}>
                    <label for="name">Forum Name:</label>
                    <input type="text" name="name" required value={this.state.name} onChange={this.handleChange}/>
                    <button type='Submit'>Create Forum</button>
                </form>
          </>
        );
    }   
}
export default NewForum;