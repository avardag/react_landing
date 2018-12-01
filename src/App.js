import React, { Component } from 'react';
import "./styles.css"

import { Element } from 'react-scroll';

import Header from './components/header/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venue_info/index';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element>
        <Element name="venueinfo">
          <VenueInfo/>
        </Element>
                
        <Element name="highlights">
         <Highlights/>
        </Element>
        <Element name="pricing">
          <Pricing/>
        </Element>
        <Element name="location">
          <Location/>
        </Element>        
        <Footer/>
      </div>
    );
  }
}

export default App;
