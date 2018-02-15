import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncBody from './container/AsyncBody'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ben Babington React App</h1>
        </header>
        <AsyncBody/>
      </div>
    );
  }
}

export default App;
