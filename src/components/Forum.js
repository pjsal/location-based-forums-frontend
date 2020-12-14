import React, { Component } from 'react';
import Post from './Post.js';
import Posts from './Posts.js';
import { Route, Link, Redirect } from 'react-router-dom';

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forumPosts: [],
    };
  }

    showPosts = (e) => {
      // Still need this even though it's a link (it will still rerender)
      e.preventDefault();
      this.setState({
        forumPosts: this.props.posts
      })
      console.log('Current Forum:', this.props.posts);

      

      
    }

    render() {

      // let allPosts = <h4>No Posts Yet</h4>;

      // if (this.props.posts.length > 0) {
      //   allPosts = this.props.posts.map((post, index) => {
      //       return <Post 
      //               message={post.message}
      //               author={post.author}
      //               key={index}
      //               />
      //   });
      // }


    return (
      <>
        
        <h2><a href="#" onClick={this.showPosts}>{this.props.name}</a></h2>
        {/* <h2><a href="#" onClick={(e) => {e.preventDefault(); return <Posts posts={this.props.posts}/>}}>{this.props.name}</a></h2> */}
        
        
        {/* <Posts posts={this.props.posts}/> */}
        <Posts posts={this.state.forumPosts}/>




        {/* <Route path='/posts' exact component={(props) => {
          return <>
              <Post posts={this.props.posts}/>
          </>
        }}/> */}

      </>
      );
    }   
}

export default Forum;