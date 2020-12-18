import React, { Component } from "react";
import { Route, Link, Redirect } from 'react-router-dom';
import { render } from "react-dom";
import { validateUser, createNewUser, getAllForums, createNewForum, addUserToForum } from "./api";
import Login from "./components/Login.js";
import ForumMap from "./components/ForumMap.js";
import Forums from "./components/Forums.js";
import RegisterModal from "./components/RegisterModal.js";
import RegisterUser from "./components/RegisterUser.js";

const APPNAME = "Location Based Forums"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: '',
        userName: '',
        loggedIn: false,
      }, 
      // lat: 39.901900368416364,
      // lng: -75.16390800261163,

      lat: 39.90260793870716, 
      lng: -75.16732681400379,
      forums: [],
      forumSelected: '',
      showRegistration: false,
      showRegistrationBtn: true,
    };
  }

  componentDidMount(){
    // Get all forums when this component mounts
    this.refreshForums()
  };
  

  refreshForums = () => {
    // e.preventDefault(); 
    // Call function in API file
      getAllForums()
        // If call was successful
        .then((response) => {
            // console.log('All Forums', response);
            this.setState ({
              forums: response.data.forum,
              forumSelected: '',
            })

        })
        .catch((error) => {
            console.log('API ERROR:', error);
        });
  }

  register = (e, user) => {
    e.preventDefault();
    console.log("in register user:", user) 
    // Call function in API file
    createNewUser(user)
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
            showRegistration: false,
            showRegistrationBtn: false,
          });
          
          console.log('Register state currentUser', this.state.id, this.state.userName)
        } else {
          // Need to return an error to the screen
          console.log('User NOT found!')
        }
      }) 
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }



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
            showRegistrationBtn: false,
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


  logout = (e, user) => {
    e.preventDefault(); 
    // NEED AN API CALL TO REMOVE USER FROM FORUMS.  CURRENT USER STATE IS HERE SO SHOULD BE ABLE TO USE THAT
    // Call function in API file
    // validateUser(user)
    //   // If call was successful
    //   .then((response) => {
    //     // console.log('currentUser', response);
    //     // If found (i.e, user not null)
    //     if (response.data.user) {
    //       // Update state
          this.setState ({
            id: '',
            userName: '',
            loggedIn: false,
            showRegistrationBtn: true,
          });

          // Get all forums when this component mounts
          this.refreshForums()
          
      //     console.log('state currentUser', this.state.id, this.state.userName)
      //   } else {
      //     // Need to return an error to the screen
      //     console.log('User NOT found!')
      //   }
      // }) 
      // .catch((error) => {
      //   console.log('API ERROR:', error);
      // });
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
        const updatedForums  = this.state.forums.map(originalForums => newlyJoinedForum.find(newForum => newForum._id === originalForums._id) || originalForums) 
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

  
  showActiveForumOnly = (forumId) => {
    console.log('Active Forum', forumId)
    const selectedForum = this.state.forums.filter((forum) => {
      return forum._id === forumId;
    });
    console.log('All forums', this.state.forums)
    console.log('Forums Array with active only', selectedForum)
    console.log('forumId', forumId)
    this.setState({
      // forums: selectedForum,
      forumSelected: forumId,
    });
    console.log('forums', this.state.forums)
    console.log('forumSelected', this.state.forumSelected)
  }
  
  showRegistrationModal = () => {
    this.setState({ 
      showRegistration: true,
    });
  };

  hideRegistrationModal = () => {
    this.setState({ 
      showRegistration: false,
    });
  };

  render() {
    
    const showHideRegBtn = this.state.showRegistrationBtn ? "display-reg-btn" : "hide-reg-btn";

    return (
      <>
        <RegisterModal showRegistration={this.state.showRegistration} handleClose={this.hideRegistrationModal}>
          <RegisterUser register={this.register}/>
        </RegisterModal>
        <div className="header">
          <div className="logo">
            {APPNAME}
          </div>
          <div className="login">
            <Login  loggedIn={this.state.loggedIn}
                    login={this.login}
                    logout={this.logout}/>
          </div>
          <div className={showHideRegBtn}>
            <button type="button" onClick={this.showRegistrationModal}>New User?</button>
          </div>
        </div>
        <div className="main-container">
          <div className='forums'>
            <Forums   forums={this.state.forums}
                      userId={this.state.id}
                      userName={this.state.userName}
                      userLat={this.state.lat}
                      userLng={this.state.lng}
                      userLoggedIn={this.state.loggedIn}
                      forumSelected={this.state.forumSelected}
                      plantNewForum={this.plantNewForum}
                      joinForum={this.joinForum}
                      showActiveForumOnly={this.showActiveForumOnly}
                      refreshForums={this.refreshForums}
                      />
          </div>
          <div className="Map"> 
          <ForumMap lat={this.state.lat} 
                          lng={this.state.lng}
                          forums={this.state.forums}
                          currentUser={this.state.currentUser}
                          />  
          </div>
        </div>
      </>
    );
  }
}

export default App;
