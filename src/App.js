import React, { Component } from 'react';
// import logo from './logo.svg';
import Locations from './Components/Locations';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       Bangalore, India
       <br/>
        <Locations/>
      </div>
    );
  }
}

export default App;
