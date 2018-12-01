import React, { Component } from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/AppBar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';



class Header extends Component {
  state={
    drawerOpen: false,
    headerShow: false
  }
  toggleDrawer = (value) =>{
    this.setState({
      drawerOpen: value
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  
  handleScroll = ()=>{
    if (window.scrollY < 0) {
      this.setState({headerShow: false})
    } else {
      this.setState({headerShow: true})
    }
  }
  
  render() {

    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            background: this.state.headerShow ? '#2f2f2f' : "transparent",
            boxShadow: 'none'
          }}
        >
          <Toolbar style={{
                background: this.state.headerShow ? '#2f2f2f' : "transparent",
                boxShadow: 'none',
                padding: '10px 0px',
                flexDirection: 'row'
              }}>
          <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className="header_logo_title">Musical Event</div>
          </div>

          <IconButton 
            color="inherit" 
            aria-label="Menu" 
            onClick={()=> this.toggleDrawer(true) }
            >
              <MenuIcon />
            </IconButton>

            <SideDrawer
              open={this.state.drawerOpen}
              onClose={(value)=> this.toggleDrawer(value)}
            />
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

export default Header;