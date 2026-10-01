import React, { useState, useEffect } from 'react'
import { type HeadProps } from 'gatsby'
import HeaderPage from '../components/HeaderPage'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from 'mdbreact'
import SEO from '../components/seo'
import { ThemeProvider } from 'baseui';
import { ParagraphLarge } from 'baseui/typography';
import Navbar from '../components/Navbar';
import { Input, SIZE } from "baseui/input";
import { styled } from "baseui";
import ArrowRight from 'baseui/icon/arrow-right';
import {Button} from 'baseui/button';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import {Toast, KIND} from 'baseui/toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEME, getStoredTheme, type Theme } from '../types/theme';
import { siteTheme } from '../theme/site';

interface ContactForm {
    name: string
    email: string
    subject: string
    message: string
}

const MessageField = styled('textarea', ({ $theme }) => ({
    width: '100%',
    minHeight: '160px',
    padding: '14px 16px',
    fontSize: '16px',
    lineHeight: 1.5,
    border: `2px solid ${$theme.colors.inputBorder}`,
    borderRadius: $theme.borders.inputBorderRadius,
    backgroundColor: $theme.colors.inputFill,
    color: $theme.colors.contentPrimary,
    fontFamily: 'inherit',
    resize: 'vertical',
    ':focus': {
        outline: 'none',
        borderColor: $theme.colors.borderSelected,
    },
}));

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
    const [theme, setTheme] = useState<Theme>(getStoredTheme);
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [captcha, setCaptcha] = useState<string | null>('')
    const [btnLoading, setBtnLoading] = useState(false)
    const [error, setError] = useState(false)
     
    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    const loadingState = { 
        isLoading: btnLoading? true : false
    }

    const { name, email, subject, message } = formData

    const onChange = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.currentTarget
        const field = name as keyof ContactForm
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(captcha === null || captcha.length <= 0){
            setError(true)
        }
        else{
            setBtnLoading(true);
            emailjs.sendForm('gmail', 'digital_portfolio', e.currentTarget, 'user_XIKYWP5J2mUApRI1C06BW')
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
            }, (error: { text?: string }) => {
                console.log(error.text);
                window.location.reload();
            });
        }
    }

    return (
        <ThemeProvider theme={siteTheme(theme)}>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
            <MDBContainer fluid className="px-4">
                <HeaderPage text="Get in Touch"/>
                <ParagraphLarge maxWidth="36rem" marginTop="0" marginBottom="scale800">
                    Tell me about the product.
                </ParagraphLarge>
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
                            <MessageField
                                name="message"
                                value={message}
                                onChange={e=>onChange(e)}
                                placeholder="Your Message"
                                required
                            />
                        </div>
                        <div className="my-4">
                            <span style={{ display: error ? "inline" : "none" }}>
                                <MDBAnimation type="slideInLeft">
                                    <Toast kind={KIND.negative}>You need to verify before submitting</Toast>
                                </MDBAnimation>
                            </span>
                            <ReCAPTCHA
                                sitekey={process.env.GATSBY_RECAPTCHA_SITEKEY || ''}
                                onChange={(value)=>setCaptcha(value)}
                            />
                        </div>
                        <div className="my-4 pb-5">
                            <Button {...loadingState} endEnhancer={<ArrowRight size={24} />}>
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

export const Head = ({ location }: HeadProps) => (
    <SEO
        title="Contact"
        description="Contact Fred Garingo, a senior full stack developer in Cebu, about a product you want to build."
        pathname={location.pathname}
    />
)

export default ContactPage
