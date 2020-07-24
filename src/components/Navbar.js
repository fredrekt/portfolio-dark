import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
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
      color: color
    }

    return (
      <div>
        <header>
              <MDBNavbar className="z-depth-0 p-5" scrolling color="light" light dark expand="md">
                <MDBContainer fluid>
                  <Link style={styleColor} to="/">
                    <strong>Navbar</strong>
                  </Link>
                  <MDBNavbarToggler onClick={this.onClick} />
                  <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav className="align-items-center" right>
                      <MDBNavItem>
                        <Link style={styleColor} className="px-5" to="/about">
                          About
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link style={styleColor} className="px-5"to="/works">
                          Work
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link style={styleColor} className="px-5"to="/resume">
                          Resume
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link style={styleColor} className="px-5"to="/contact">
                          Contact
                        </Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Button className="px-5" kind={KIND.minimal} onClick={this.props.onClick}>
                          Dark or Light
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