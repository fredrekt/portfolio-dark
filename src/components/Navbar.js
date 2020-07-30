import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer } from 'mdbreact';
import { Link } from 'gatsby';
import { Button, KIND } from "baseui/button";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const theme = this.props.color 
    const color = theme === 'dark' ? "#fff" : "#000"
    const styleColor = {
      color: color,
      fontWeight: `700`,
      fontSize: `1rem`,
      textTransform: `uppercase`,
      fontFamily:`'Lato', sans-serif!important`,
      letterSpacing: `0.3em`
    }

    const logo = {
      color: color,
      fontWeight: `900`,
      fontSize: `2rem`
    }

    const active = {
      textDecoration: `underline`,
      textUnderlinePosition: `under`
    }

    return (
      <div>
        <header>
              <MDBNavbar className="z-depth-0 py-5" scrolling color="light" light dark expand="md">
                <MDBContainer fluid>
                  <Link to="/">
                    <strong style={logo} className="special-font">
                      Spicy Developer
                    </strong>
                  </Link>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav className="align-items-center" right>
                      <MDBNavItem>
                        <Link activeStyle={active} style={styleColor} className="px-4" to="/about">
                          About
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link activeStyle={active} style={styleColor} className="px-4"to="/works">
                          Work
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link activeStyle={active} style={styleColor} className="px-4"to="/resume">
                          Resume
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link activeStyle={active} style={styleColor} className="px-4"to="/contact">
                          Contact
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Button style={styleColor} className="px-4" kind={KIND.minimal} onClick={this.props.onClick}>
                          {theme === 'light' ? "Toggle Dark": "Toggle Light"}
                        </Button>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navbar;