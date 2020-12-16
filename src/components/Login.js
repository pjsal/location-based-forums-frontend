import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();

    this.state = {
        userName: '',
        password: '',
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }

  render(){

    // Conditional rendering for new login component
    let loginDisplay = 
          <form onSubmit={(e) => this.props.login(e, this.state)}>            
            <label for="userName">User Name:</label>
            <input type="text" name="userName" required value={this.state.userName} onChange={this.handleChange}/>
            <label for="password">Password:</label>
            <input type="password" name="password" required value={this.state.password} onChange={this.handleChange}/>
            <button type='Submit'>Log In</button>
          </form>

    // Display log out button if user is logged in
    if (this.props.loggedIn) {
      loginDisplay =
          <form onSubmit={(e) => this.props.logout(e)}>
            <button type='Submit'>Log Out</button>
          </form>
    }

    return (
      <div>
        {loginDisplay}
        {/* <form onSubmit={(e) => this.props.login(e, this.state)}>
          
            <label for="userName">User Name:</label>
            <input type="text" name="userName" required value={this.state.userName} onChange={this.handleChange}/>
            <label for="password">Password:</label>
            <input type="password" name="password" required value={this.state.password} onChange={this.handleChange}/>
          <button type='Submit'>Log In</button>
        </form> */}
      </div>
      )
  }
}

export default Login;