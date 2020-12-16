import React, { Component } from 'react';
import Post from './Post.js';
import NewPost from './NewPost.js';

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
    // console.log('This states posts', this.state.forumPosts)
    // console.log('This props posts', this.props.forumPosts)

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

      let showNewPostForm = '';
      
      // Only show the new posts form if user selected a forum
      if (this.props.forumSelected) {
        showNewPostForm = 
          <NewPost  postNewMessage={this.props.postNewMessage}
                    userName={this.props.userName}/>
      }

    return (
      <div className="posts">
        {allPosts}
        <br></br>
        {showNewPostForm}
      </div>
      );
    }   
}

export default Forum;