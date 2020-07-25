import React, { useState } from 'react'
import HeaderPage from '../components/HeaderPage'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import SEO from '../components/seo'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';
import { Input, SIZE } from "baseui/input";
import { Textarea } from "baseui/textarea";
import ArrowRight from 'baseui/icon/arrow-right';
import {Button} from 'baseui/button';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const ContactPage = () => {
    const [theme, setTheme] = useState(THEME.light);
    const [value, setValue] = useState('');
    const [btnLoading, setBtnLoading] = useState(false)

    const loadingState = { 
        isLoading: btnLoading? true : false
    }

    const onSubmit = e => {
        e.preventDefault();
        setBtnLoading(true);
        setTimeout(()=>{
            setBtnLoading(false)
        },1500)
    }

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Contact"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
            <MDBContainer fluid className="px-4">
                <HeaderPage text="Get in Touch"/>
                <MDBRow>
                    <MDBCol md="8" lg="8">
                        <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-4">
                            <Input
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder="Your Name"
                                clearOnEscape
                                cleareable
                                size={SIZE.large}
                            />
                        </div>
                        <div className="my-4">
                            <Input
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder="Your Email"
                                clearOnEscape
                                cleareable
                                size={SIZE.large}
                            />
                        </div>
                        <div className="my-4">
                            <Input
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                placeholder="Your Subject"
                                clearOnEscape
                                cleareable
                                size={SIZE.large}
                            />
                        </div>
                        <div className="my-4">
                            <Textarea
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                size={SIZE.large}
                                placeholder="Controlled Input"
                                clearable
                                clearOnEscape
                            />
                        </div>
                        <div className="my-4 pb-5">
                        <Button {...loadingState} endEnhancer={() => <ArrowRight size={24} />}>
                            Send Message
                        </Button>
                        </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default ContactPage
