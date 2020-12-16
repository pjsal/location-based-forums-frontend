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
      console.log('forumSelected', this.props.forumSelected)
      // console.log('userName', this.props.userName)
      console.log('forumPosts', this.props.forumPosts);
      
      // Only show the posts if user is logged in and a forum is selected
      if (this.props.userName && this.props.forumSelected) {
        if (this.props.forumPosts.length > 0) {
          allPosts = this.props.forumPosts.map((post, index) => {
              return <Post 
                      message={post.message}
                      author={post.author}
                      key={index}
                      />
          });
        }
      }

      let showNewPostForm = '';
      
      // Only show the new posts for the selected forum
      if (this.props.forumSelected === this.props.id) {
        showNewPostForm = 
          <NewPost  postNewMessage={this.props.postNewMessage}
                    userName={this.props.userName}/>
      }

    return (
      <div className="posts">
        {allPosts}
        {showNewPostForm}
      </div>
      );
    }   
}

export default Forum;