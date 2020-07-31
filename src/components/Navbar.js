import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer } from 'mdbreact';
import { Link } from 'gatsby';
import { Button, KIND } from "baseui/button";
import './hover.css'

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
      borderBottom: `${theme === 'light' ? "2px solid #000": "2px solid #fff"}`
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
                        <span>
                          <Link activeStyle={active} style={styleColor} className="mx-4" to="/about">
                            About
                          </Link>
                        </span>
                      </MDBNavItem>
                      <MDBNavItem>
                        <span>
                          <Link activeStyle={active} style={styleColor} className="mx-4"to="/works">
                            Work
                          </Link>
                        </span>
                      </MDBNavItem>
                      <MDBNavItem>
                        <span>
                          <Link activeStyle={active} style={styleColor} className="mx-4"to="/resume">
                            Resume
                          </Link>
                        </span>
                      </MDBNavItem>
                      <MDBNavItem>
                        <span>
                          <Link activeStyle={active} style={styleColor} className="mx-4"to="/contact">
                            Contact
                          </Link>
                        </span>
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