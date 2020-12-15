import React, { Component } from 'react';
import Forum from "./Forum.js";
import NewForum from './NewForum.js';

class Forums extends Component {

  
    render() {

        // Conditional rendering 
        let allNearbyForums = <h4>No Forums Nearby</h4>;
        // console.log('forums prop', this.props.forums)

        // If forums are found
        if (this.props.forums.length > 0) {
            // Display forum details 
            allNearbyForums = this.props.forums.map((forum, index) => {
                return <Forum
                        id={forum._id} 
                        name={forum.name}
                        posts={forum.posts}
                        key={index}
                        userName={this.props.userName}
                        userLoggedIn={this.props.userLoggedIn}
                        />
            });
        }
        
        // Conditional rendering for new Forum component
        let newForumComp = <></>

        // New forums can only be created if user is logged in
        if (this.props.userLoggedIn) {
          newForumComp =
            <NewForum userId={this.props.userId}
                      userName={this.props.userName}
                      userLat={this.props.userLat}
                      userLng={this.props.userLng}
                      plantNewForum={this.props.plantNewForum}
                      />
        }
        
        // console.log('userId', this.props.userId)
    return (
      <div>
        <h3>All Nearby Forums</h3>
        {newForumComp}
        {allNearbyForums}
      </div>
    );
  }

}

export default Forums;