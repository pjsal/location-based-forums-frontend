import React, { Component } from 'react';
import Forum from "./Forum.js";
import NewForum from './NewForum.js';

class Forums extends Component {
    
  
    render() {

      // console.log('forumSelected', this.props.forumSelected)

        // Conditional rendering 
        let allNearbyForums = <h1>No Forums Nearby</h1>;
        // console.log('forums prop', this.props.forums)

        // If forums are found
        if (this.props.forums.length > 0) {
            // Display forum details 
            allNearbyForums = this.props.forums.map((forum, index) => {
                return <Forum
                        id={forum._id} 
                        name={forum.name}
                        posts={forum.posts}
                        users={forum.users}
                        forumLat={forum.latitude}
                        forumLng={forum.longitude}
                        key={index}
                        userId={this.props.userId}
                        userName={this.props.userName}
                        userLoggedIn={this.props.userLoggedIn}
                        userLat={this.props.userLat}
                        userLng={this.props.userLng}
                        forumSelected={this.props.forumSelected}
                        joinForum={this.props.joinForum}
                        showActiveForumOnly={this.props.showActiveForumOnly}
                        refreshForums={this.props.refreshForums}
                        />
            });
        }
        
        // Conditional rendering for new Forum component
        let newCreateForumDisplay = <></>

        // Only display the create forum option if the user is NOT looking at an exiting forums post details
        if (!this.props.forumSelected) {
          // New forums can only be created if user is logged in
          if (this.props.userLoggedIn) {
            newCreateForumDisplay =
              <NewForum userId={this.props.userId}
                        userName={this.props.userName}
                        userLat={this.props.userLat}
                        userLng={this.props.userLng}
                        plantNewForum={this.props.plantNewForum}
                        />
          }  
        }
        
        // console.log('userId', this.props.userId)
    return (
      <>
        {newCreateForumDisplay}
        {(!this.props.forumSelected ? <h1>Nearby Forums</h1> : '')}
        {allNearbyForums}
      </>
    );
  }

}

export default Forums;