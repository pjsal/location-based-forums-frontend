import React, { Component } from "react";
import { Route, Link, Redirect } from 'react-router-dom';
import { render } from "react-dom";
import { validateUser, getAllForums } from "./api";
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
      lat: 39.904361880550006, 
      lng: -75.1694122331469,
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
  
  render() {
    // if (this.state.loggedIn) {
    //   return <Redirect to='/forums' />
    // }
    return (
      <>

        <Login login={this.login}/>
        <Forums   forums={this.state.forums}
                  userName={this.state.userName}/>

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
