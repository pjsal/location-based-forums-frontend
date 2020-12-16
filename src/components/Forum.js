import React, { Component } from 'react';
import Posts from './Posts.js';
import { createNewPost } from "../api";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forumPosts: [],
      // forumSelected: '',
    };
  }


    returnToMainPage = () => {
      // Could have called the refreshForums() func from the onClick event, but the posts weren't being cleared out 
      console.log('returnToMainPage***************************')
      this.setState({
        forumPosts: [],
      })
      this.props.refreshForums();
    }


    showPosts = (e) => {
      e.preventDefault();
      console.log('In Show Posts***************************')
      this.setState({
        forumPosts: this.props.posts,
        // forumSelected: this.props.id,
      }, () => {
        this.props.showActiveForumOnly(this.props.id);
      }); 
      
      // this.props.showActiveForumOnly(this.props.id)
      console.log('Current Forum id:', this.props.id);
      console.log('Current Props posts:', this.props.posts);
      console.log('Current States posts:', this.state.forumPosts);
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
      
      // console.log('Users in Forum', this.props.users)

      // Conditional rendering for posts
      let forumName = <h2>{this.props.name}</h2>
      
      // Posts can only be viewd if user is logged in 
      if (this.props.userLoggedIn) { 
        // AND a member of the forum
        if (this.props.users.includes(this.props.userId)) {
          // If this is the selected forum, then display an exit forum button along with the forum heading
          if (this.props.forumSelected === this.props.id) {
            forumName = <><h2>{this.props.name}</h2> <button onClick={() => this.returnToMainPage()}>Return to Forums</button></>
          } else {
            // // Only display forum name if one wasn't already selected and this is not it 
            if (this.props.forumSelected && (this.props.forumSelected !== this.props.id)) {
              forumName = ''
            } else {
              forumName = <h2><a href="#" onClick={this.showPosts}>{this.props.name}</a></h2>
            }
          }
        // Otherwise, the user is not a member of this forum
        } else {
          // Only display forum name if one wasn't already selected and this is not it
          if (this.props.forumSelected && (this.props.forumSelected !== this.props.id)) {
            forumName = ''
          } else {
            forumName =
              <>
                <h2>{this.props.name}</h2>
                <form onSubmit={(e) => this.props.joinForum(e, this.props.id, this.props.userId)}>
                  <button type='Submit'>Join</button>
                </form>
              </>
          }
        }
      }


      return (
        <>
          {/* <h2><a href="#" onClick={this.showPosts}>{this.props.name}</a></h2> */}
          
          {forumName}

          {/* <Posts  forumPosts={this.props.posts} */}
          <Posts  forumPosts={this.state.forumPosts}
                  forumSelected={this.props.forumSelected}
                  id={this.props.id} 
                  userName={this.props.userName}
                  postNewMessage={this.postNewMessage}/>
        </>
        );
    }   
}

export default Forum;