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
            <div className="new-post-or-mainmenu">
                <button className="return-btn" onClick={() => this.props.returnToMainPage()}>Return to Forums</button>
                <form onSubmit={(e) => this.props.postNewMessage(e, this.state)}>
                    <label for="message"></label>
                    <input className="new-post" type="text" name="message" required value={this.state.message} onChange={this.handleChange}/>
                    <button type='Submit'>Send</button>
                </form>
            </div>
        );
    }   
}
export default NewPost;