import React, { Component } from 'react';
import "./styles.css"
import Header from './components/header/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venue_info/index';
import Highlights from './components/highlights/Highlights';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
