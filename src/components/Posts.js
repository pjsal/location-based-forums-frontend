import React, { Component } from 'react';
import Post from './Post.js';
import { Route, Link, Redirect } from 'react-router-dom';

class Forum extends Component {
    render() {

      let allPosts = <h4>No Posts Yet</h4>;

      if (this.props.posts.length > 0) {
        allPosts = this.props.posts.map((post, index) => {
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
      </>
      );
    }   
}

export default Forum;