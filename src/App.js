import React, { Component } from 'react';
import "./styles.css"
import Header from './components/header/Header';
import Featured from './components/featured/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
      </div>
    );
  }
}

export default App;
