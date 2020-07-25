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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [btnLoading, setBtnLoading] = useState(false)

    const loadingState = { 
        isLoading: btnLoading? true : false
    }

    const { name, email, subject, message } = formData

    const onChange = e => setFormData({ [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        setBtnLoading(true);
        setTimeout(()=>{
            setBtnLoading(false)
            alert({...formData})
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
                                name="name"
                                value={name}
                                onChange={e=>onChange(e)}
                                placeholder="Your Name"
                                clearable
                                clearOnEscape
                                type="text"
                                size={SIZE.large}
                            />
                        </div>
                        <div className="my-4">
                            <Input
                                name="email"
                                value={email}
                                onChange={e=>onChange(e)}
                                placeholder="Your Email"
                                clearable
                                clearOnEscape
                                type="email"
                                size={SIZE.large}
                            />
                        </div>
                        <div className="my-4">
                            <Input
                                name="subject"
                                value={subject}
                                onChange={e=>onChange(e)}
                                placeholder="Your Subject"
                                clearable
                                clearOnEscape
                                type="text"
                                size={SIZE.large}
                            />
                        </div>
                        <div className="my-4">
                            <Textarea
                                name="message"
                                value={message}
                                onChange={e=>onChange(e)}
                                size={SIZE.large}
                                placeholder="Your Message"
                                clearable
                                clearOnEscape
                                type="text"
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
