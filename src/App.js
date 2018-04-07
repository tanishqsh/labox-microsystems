import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Homepage/>
      </div>
    );
  }
}

export default App;
