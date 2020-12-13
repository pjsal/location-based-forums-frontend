import React, { Component } from "react";
import { render } from "react-dom";
import { validateUser } from './api';
import Login from "./components/Login.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        id: '',
        userName: ''
      }
    };
  }

  

  login = (e, user) => {
    e.preventDefault(); 
    validateUser(user)
      .then((response) => {
        console.log('currentUser', response);
      
        this.setState ({
          id: response.data.user._id,
          userName: response.data.user.userName,
        })
        console.log('state currentUser', this.state.id, this.state.userName)
      }) 
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }
  
  render() {
    return (
      <>
        <Login login={this.login}/>
      </>
    );
  }
}

export default App;
