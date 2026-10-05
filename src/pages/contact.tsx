import React, { useState, useEffect, useRef } from 'react'
import { type HeadProps } from 'gatsby'
import HeaderPage from '../components/HeaderPage'
import SEO from '../components/seo'
import { ThemeProvider } from 'baseui';
import { ParagraphLarge } from 'baseui/typography';
import Navbar from '../components/Navbar';
import { Input, SIZE } from "baseui/input";
import { styled } from "baseui";
import ArrowRight from 'baseui/icon/arrow-right';
import {Button} from 'baseui/button';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { THEME, getStoredTheme, type Theme } from '../types/theme';
import { siteTheme } from '../theme/site';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import {
    EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    RECAPTCHA_SITE_KEY,
    isContactFormConfigured,
} from '../constants/emailjs';

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
    '::placeholder': {
        color: $theme.colors.inputPlaceholder,
    },
}));


const emptyForm: ContactForm = { name: '', email: '', subject: '', message: '' }

const toastSuccess = () => {
    toast.dark("Message sent! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

const toastFailure = () => {
    toast.error('Something went wrong. Your message is still here, so please try again.', {
        position: "top-right",
        autoClose: 7000,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

const ContactPage = () => {
    const [theme, setTheme] = useState<Theme>(getStoredTheme);
    const [formData, setFormData] = useState<ContactForm>(emptyForm);
    const [captcha, setCaptcha] = useState<string | null>(null)
    const [btnLoading, setBtnLoading] = useState(false)
    const [captchaError, setCaptchaError] = useState(false)
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    const { name, email, subject, message } = formData

    const onChange = (
        e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.currentTarget
        const field = name as keyof ContactForm
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const onCaptchaChange = (value: string | null) => {
        setCaptcha(value)
        if (value) setCaptchaError(false)
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (btnLoading) return

        if (!isContactFormConfigured) {
            console.error('Contact form is missing GATSBY_EMAILJS_* / GATSBY_RECAPTCHA_SITEKEY env vars')
            toastFailure()
            return
        }

        if (!captcha) {
            setCaptchaError(true)
            return
        }

        setBtnLoading(true);
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                e.currentTarget,
                { publicKey: EMAILJS_PUBLIC_KEY }
            )
            setFormData(emptyForm)
            toastSuccess();
        } catch (err) {
            // Keep what the visitor typed so they can retry without rewriting it.
            console.error('Failed to send contact message', err)
            toastFailure();
        } finally {
            // A captcha token is single-use, so always require a fresh one.
            recaptchaRef.current?.reset()
            setCaptcha(null)
            setBtnLoading(false)
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
                        <form onSubmit={onSubmit} aria-busy={btnLoading}>
                        <div className="mb-4">
                            <Input
                                name="name"
                                autoComplete="name"
                                aria-label="Your name"
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
                                autoComplete="email"
                                aria-label="Your email"
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
                                autoComplete="off"
                                aria-label="Subject"
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
                                rows={6}
                                value={message}
                                onChange={e=>onChange(e)}
                                placeholder="Your Message"
                                aria-label="Your message"
                                required
                            />
                        </div>
                        <div className="my-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey={RECAPTCHA_SITE_KEY}
                                theme={theme === THEME.light ? 'light' : 'dark'}
                                onChange={onCaptchaChange}
                                onExpired={() => setCaptcha(null)}
                            />
                            {captchaError && (
                                <p role="alert" style={{ marginTop: 8, fontSize: 14, color: "#f87171" }}>
                                    Please tick the box above to confirm you&apos;re human.
                                </p>
                            )}
                        </div>
                        <div className="my-4 pb-5">
                            <Button type="submit" isLoading={btnLoading} endEnhancer={<ArrowRight size={24} />}>
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
        image="/og/contact.png"
        pathname={location.pathname}
    />
)

export default ContactPage
