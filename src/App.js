import React, { Component } from "react";
import { Route, Link, Redirect } from 'react-router-dom';
import { render } from "react-dom";
import { validateUser, getAllForums, createNewForum, addUserToForum } from "./api";
import Login from "./components/Login.js";
import ForumMap from "./components/ForumMap.js";
import Forums from "./components/Forums.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: '',
        userName: '',
        loggedIn: false,
      }, 
      lat: 39.901900368416364,
      lng: -75.16390800261163,
      forums: [],
    };
  }

  componentDidMount(){
    // Get all forums when this component mounts
    getAllForums()
        // If call was successful
        .then((response) => {
            console.log('All Forums', response);
            this.setState ({
              forums: response.data.forum,
            })

        })
        .catch((error) => {
            console.log('API ERROR:', error);
        });
  };
  

  login = (e, user) => {
    e.preventDefault(); 
    // Call function in API file
    validateUser(user)
      // If call was successful
      .then((response) => {
        // console.log('currentUser', response);
        // If found (i.e, user not null)
        if (response.data.user) {
          // Update state
          this.setState ({
            id: response.data.user._id,
            userName: response.data.user.userName,
            loggedIn: true,
          });
          
          console.log('state currentUser', this.state.id, this.state.userName)
        } else {
          // Need to return an error to the screen
          console.log('User NOT found!')
        }
      }) 
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }
  
  plantNewForum = (e, newForum) => {
    e.preventDefault(); 
    console.log('newForum:', newForum)
    // Call function in API file
    createNewForum(newForum)
      // If call was successful
      .then((response) => {
        console.log('response', response.data.forum)
        // Update forums by combining with previous states so it rerenders 
        this.setState({
          forums: [...this.state.forums, response.data.forum],
        });
      }) 
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }


  joinForum = (e, forumId, userId) => {
    e.preventDefault(); 
    console.log('forumId:', forumId)
    console.log('userId:', userId)
    // Call function in API file
    addUserToForum(forumId, userId)
      // If call was successful
      .then((response) => {
        console.log('response', response.data.forum)
        // Convert response into an array in preparation for next steps
        const newlyJoinedForum = [response.data.forum]
        // Create a new array and replace the old forum with the recently joined forum (that contains the new user).  
        const updatedForums  = this.state.forums.map(obj => newlyJoinedForum.find(o => o._id === obj._id) || obj) 
        // console.log('forums array', this.state.forums)
        // console.log('newlyJoinedForum', newlyJoinedForum)
        // console.log('updatedForums', updatedForums)
        
        // Set the forums array equal to the updated one.   This will cause the state to refresh and eliminate the need for a trip to the database.
        this.setState({
          forums: updatedForums,
        });
      }) 
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }



  render() {
    // if (this.state.loggedIn) {
    //   return <Redirect to='/forums' />
    // }
    return (
      <>

        <Login login={this.login}/>
        <Forums   forums={this.state.forums}
                  userId={this.state.id}
                  userName={this.state.userName}
                  userLat={this.state.lat}
                  userLng={this.state.lng}
                  userLoggedIn={this.state.loggedIn}
                  plantNewForum={this.plantNewForum}
                  joinForum={this.joinForum}
                  />
        {/* <ForumMap lat={this.state.lat} 
                        lng={this.state.lng}
                        forums={this.state.forums}
                        currentUser={this.state.currentUser}
                        /> */}

        {/* <Route path='/login' exact component={(props) => {
          return <Login login={this.login}/>
        }}/> */}
        
        
        {/* <Route path='/forums' exact component={(props) => {
          return <>
              <Forums   forums={this.state.forums}
                        currentUser={this.state.currentUser}/>
              <ForumMap lat={this.state.lat} 
                        lng={this.state.lng}
                        forums={this.state.forums}
                        currentUser={this.state.currentUser}/>
          </>
        }}/> */}
      </>
    );
  }
}

export default App;
