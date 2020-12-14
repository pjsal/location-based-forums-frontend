import React, { Component } from 'react';

class NewPost extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            author: '',
        };
    }

    handleChange = (e) => {
        // Not sure if valuing 'author' key: value pair is the best way to do this, but I kept getting undefined when I tried to use it anywhere else. 
        this.setState({[e.currentTarget.name]: e.currentTarget.value,
                        'author': this.props.userName
        })
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.props.postNewMessage(e, this.state)}>
                    <label for="message">New Post:</label>
                    <input type="text" name="message" required value={this.state.message} onChange={this.handleChange}/>
                    <button type='Submit'>Post Message</button>
                </form>
          </>
        );
    }   
}
export default NewPost;