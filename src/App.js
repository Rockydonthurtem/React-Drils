import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: ""
    }
    this.handleMessage = this.handleMessage.bind(this)
  }
  handleMessage(val) {
    this.setState({ messages: val })
  }
  render() {
    //joe was here
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleMessage(e.target.value)} />
        <p> {this.state.messages}</p>
      </div>
    );
  }
}

export default App;
