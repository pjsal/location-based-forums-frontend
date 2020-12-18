import React, { Component } from 'react';

class RegisterUser extends Component {
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

    return (
      <div className="register">
        <form onSubmit={(e) => this.props.register(e, this.state)}>
          
            <label for="userName">User Name:</label>
            <input type="text" name="userName" required value={this.state.userName} onChange={this.handleChange}/>
            <label for="password">Password:</label>
            <input type="password" name="password" required value={this.state.password} onChange={this.handleChange}/>
          <button type='Submit'>Register</button>
        </form>
      </div>
      )
  }
}

export default RegisterUser;