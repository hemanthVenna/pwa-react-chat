import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/ChatWrap.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-intro">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src='/favicon.ico' className="App-logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
        <Chat />
      </div>
    );
  }
}

export default App;
