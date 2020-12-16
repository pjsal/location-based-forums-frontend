import React, { Component } from 'react';

class Post extends Component { 

  render() {
      return (
        <>
        <div className={`post ${this.props.userName === this.props.author ? 'currentUser' : ''}`}>
          {this.props.message}
        </div>
        <div className={`author ${this.props.userName === this.props.author ? '' : 'currUser'}`}>
          {this.props.author}
        </div>
        </>
      );
  }   
}
export default Post;