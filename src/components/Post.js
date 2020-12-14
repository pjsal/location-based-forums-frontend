import React, { Component } from 'react';

class Post extends Component { 

  render() {
      return (
        <div className="post">
          <p>{this.props.author}: {this.props.message}</p>
        </div>
      );
  }   
}
export default Post;