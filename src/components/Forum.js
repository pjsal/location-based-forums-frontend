import React, { Component } from 'react';
import Posts from './Posts.js';
import { createNewPost } from "../api";
import { Route, Link, Redirect } from 'react-router-dom';

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forumPosts: [],
      forumId: '',
    };
  }

    showPosts = (e) => {
      // Still need this even though it's a link (it will still rerender)
      e.preventDefault();
      this.setState({
        forumPosts: this.props.posts,
      })
      console.log('Current Forum id:', this.props.id);
      console.log('Current Forum posts:', this.props.posts);
    }

    postNewMessage = (e, post) => {
      e.preventDefault(); 
      // console.log('author:', this.props.currentUser, 'message:', post)
      console.log('posts:', post)
      console.log('Forum:', this.props.id)
      // Call function in API file
      createNewPost(this.props.id, post)
        // If call was successful
        .then((response) => {
          console.log('response', response.data.post)
          // Update forum posts by combining with previous states so it rerenders 
          this.setState({
            forumPosts: [...this.state.forumPosts, response.data.post],
          });
        }) 
        .catch((error) => {
          console.log('API ERROR:', error);
        });
    }
  

    render() {

      return (
        <>
          <h2><a href="#" onClick={this.showPosts}>{this.props.name}</a></h2>
          
          <Posts  forumPosts={this.state.forumPosts}
                  id={this.props.id} 
                  userName={this.props.userName}
                  postNewMessage={this.postNewMessage}/>
        </>
        );
    }   
}

export default Forum;