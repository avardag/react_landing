import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';


class Discount extends Component {
  state={
    discStart: 0,
    discEnd: 30
  }

  percentage = () =>{
    if(this.state.discStart < this.state.discEnd){
      this.setState({
        discStart: this.state.discStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(()=>{
      this.percentage()
    },30)
  }
  
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">

          <Fade
            onReveal={()=> this.percentage()}
          >
            <div className="discount_porcentage">
              <span>{this.state.discStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 30th December</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque eligendi aliquam impedit! Corporis, alias nisi optio necessitatibus tempore repudiandae!</p>
            
            <MyButton
              text="Purchase Tickets"
              bck="#ffa800"
              color="#fff"
              link="https://google.com"
            />
            </div>
          </Slide>
        
        </div>
      </div>
    );
  }
}

export default Discount;