import React, { Component } from 'react';
import Forum from "./Forum.js";

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
                        name={forum.name}
                        key={index}
                        />
            });
        }
        
    return (
      <div>
        <h3>All Nearby Forums</h3>
        {allNearbyForums}
      </div>
    );
  }

}

export default Forums;