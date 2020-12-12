import React, { Component } from "react";
import { render } from "react-dom";
import Login from "./components/Login.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <Login/>
      </>
    );
  }
}

export default App;
