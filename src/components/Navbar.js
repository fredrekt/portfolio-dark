import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBContainer, MDBIcon } from 'mdbreact';
import { Link } from 'gatsby';
import { Button, KIND } from "baseui/button";
import './hover.css'
import HamburgerMenu from 'react-hamburger-menu'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  SIZE,
  ROLE
} from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import { StyledLink } from 'baseui/link'
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      modal: typeof window !== `undefined` && window.localStorage.getItem('consent') === null && true
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    typeof window !== `undefined` && window.localStorage.setItem('consent', this.state.modal)
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  closeModal = () => {
    this.setState({
      modal: false
    })
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
      <>
        <header>
              <MDBNavbar className="z-depth-0 py-5" scrolling color="light" light dark expand="md">
                <MDBContainer fluid>
                  <Link to="/">
                    <strong style={logo} className="special-font">
                      Spicy Developer
                    </strong>
                  </Link>
                  {/* <MDBNavbarToggler onClick={this.onClick} /> */}
                  <HamburgerMenu
                      className="d-lg-none d-md-none d-inline mx-2"
                      isOpen={this.state.collapse}
                      menuClicked={this.onClick}
                      width={24}
                      height={18}
                      strokeWidth={2}
                      rotate={0}
                      color={theme === 'dark' ? "white" : "black"}
                      borderRadius={0}
                      animationDuration={0.5}
                  />     
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
                          <Link activeStyle={active} style={styleColor} className="mx-4"to="/blogs">
                            Blog
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
                          {theme === 'light' ? 
                          (
                            <>
                              Dark Mode <MDBIcon icon="moon mx-2"/>
                            </>
                          )
                          : 
                          (
                            <>
                              Light Mode <MDBIcon far icon="moon mx-2"/>
                            </>
                          )}
                        </Button>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
        </header>

        <Modal
          onClose={this.closeModal}
          closeable
          isOpen={this.state.modal}
          animate
          autoFocus
          size={SIZE.default}
          role={ROLE.dialog}
        >
          <ModalHeader>Cookies Policy</ModalHeader>
          <ModalBody>
            This website uses cookies to improve your website experience.&nbsp;
            <StyledLink href="/policy">Learn more here.</StyledLink>
          </ModalBody>
          <ModalFooter>
            <ModalButton onClick={this.closeModal} kind={ButtonKind.tertiary}>
              Cancel
            </ModalButton>
            <ModalButton onClick={this.closeModal}>Okay</ModalButton>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Navbar;