import React, { Component } from 'react';
import Post from './Post.js';
import NewPost from './NewPost.js';
import { Route, Link, Redirect } from 'react-router-dom';

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: {
        message: '',
        author: this.props.userName,
      }, 
    };
  }

  
  render() {
    console.log('This states posts', this.state.forumPosts)
    console.log('This props posts', this.props.forumPosts)

    //   let allPosts = <h4>No Posts Yet</h4>;
      let allPosts = '';

      if (this.props.forumPosts.length > 0) {
        allPosts = this.props.forumPosts.map((post, index) => {
            return <Post 
                    message={post.message}
                    author={post.author}
                    key={index}
                    />
        });
      }

    return (
      <>
        {allPosts}
        <NewPost  postNewMessage={this.props.postNewMessage}
                  userName={this.props.userName}/>
      </>
      );
    }   
}

export default Forum;