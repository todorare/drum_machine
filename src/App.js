import React, { Component } from 'react';
import DrumMachine from './components/DrumMachine';

import "./App.css";

class App extends Component {
  render() {
    return (
      <DrumMachine playSound={this.playSound}/>
    );
  }
}

export default App;
