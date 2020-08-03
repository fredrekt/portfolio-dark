import React, { useState, useEffect } from 'react'
import HeaderPage from '../components/HeaderPage'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact'
import SEO from '../components/seo'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import Navbar from '../components/Navbar';
import { Input, SIZE } from "baseui/input";
import { Textarea } from "baseui/textarea";
import ArrowRight from 'baseui/icon/arrow-right';
import {Button} from 'baseui/button';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import {Toast, KIND} from 'baseui/toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const toastSuccess = () => {
    toast.dark(`Message Sent!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        progressStyle: { 
            background: '#fafafa'
        },
        });
}

const ContactPage = () => {
    const [selectedTheme, setSelectedTheme] = useState(undefined)
    const [theme, setTheme] = useState(selectedTheme === THEME.light ? THEME.light : THEME.dark);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [captcha, setCaptcha] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const [error, setError] = useState(false)
     
    useEffect(() => {
        setSelectedTheme(localStorage.getItem('themeColor'))
    }, [])

    const loadingState = { 
        isLoading: btnLoading? true : false
    }

    const { name, email, subject, message } = formData

    const onChange = e => setFormData({ [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(captcha.length <= 0 || captcha === null){
            setError(true)
        }
        else{
            setBtnLoading(true);
            emailjs.sendForm('gmail', 'digital_portfolio', e.target, 'user_XIKYWP5J2mUApRI1C06BW')
            .then((result) => {
                console.log(result.text);
                setTimeout(()=>{
                    setBtnLoading(false)
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    })
                    toastSuccess();
                    setError(false);
                },1500)
            }, (error) => {
                console.log(error.text);
                window.location.reload();
            });
        }
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
                                required
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
                                required
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
                                required
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
                                required
                                clearable
                                clearOnEscape
                                type="text"
                            />
                        </div>
                        <div className="my-4">
                            <span style={{ display: error ? "inline" : "none" }}>
                                <MDBAnimation type="slideInLeft">
                                    <Toast kind={KIND.negative}>You need to verify before submitting</Toast>
                                </MDBAnimation>
                            </span>
                            <ReCAPTCHA
                                sitekey="6LcOeLgZAAAAANHETknJoMT5qLG7Nl7h0X_leF7K"
                                onChange={(value)=>setCaptcha(value)}
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
            <ToastContainer/>
        </div>
        </ThemeProvider>
    )
}

export default ContactPage
