import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { useState, useEffect } from 'react'
import HeaderPage from '../components/HeaderPage';
import Navbar from '../components/Navbar';
import SEO from '../components/seo';
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui';

const THEME = {
    light: 'light',
    dark: 'dark',
};

const PolicyPage = () => {
    const initialColor = () => typeof window !== `undefined` && window.localStorage.getItem('themeColor') || 'light'
    const [theme, setTheme] = useState(initialColor);

    useEffect(() => {
        typeof window !== `undefined` && window.localStorage.setItem('themeColor', theme)
    },[theme])

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Policy" description="Terms & Conditions, Privacy Policy, Cookies Policy, all that legal stuff."/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
            } color={theme}/>
            <MDBContainer fluid className="px-4 pb-5">
                <MDBRow>
                    <MDBCol md="11" lg="11">
                        <HeaderPage text="Privacy Policy"/>
                        <div className="content h4-responsive">
                            <p>Your privacy is important to us. It is Fredrekt's policy to respect your privacy regarding any information we may collect from you across our website, <a href="http://fredgaringo.ga">http://fredgaringo.ga</a>, and other sites we own and operate.</p>
                            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
                            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                            <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                            <p>This policy is effective as of 12 July 2020.</p>
                            <p><a href="https://getterms.io" title="Generate a free privacy policy">Privacy Policy created with GetTerms.</a></p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-4">
                    <MDBCol md="11" lg="11">
                        <HeaderPage text="Terms & Conditions"/>
                        <div className="content h4-responsive">
                            <h3>1. Terms</h3>
                            <p>By accessing the website at <a href="http://fredgaringo.ga">http://fredgaringo.ga</a>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                            <h3>2. Use License</h3>
                            <ol type="a">
                            <li>Permission is granted to temporarily download one copy of the materials (information or software) on Fredrekt's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            <ol type="i">
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>attempt to decompile or reverse engineer any software contained on Fredrekt's website;</li>
                                <li>remove any copyright or other proprietary notations from the materials; or</li>
                                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ol>
                                </li>
                            <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Fredrekt at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
                            </ol>
                            <h3>3. Disclaimer</h3>
                            <ol type="a">
                            <li>The materials on Fredrekt's website are provided on an 'as is' basis. Fredrekt makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                            <li>Further, Fredrekt does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
                            </ol>
                            <h3>4. Limitations</h3>
                            <p>In no event shall Fredrekt or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fredrekt's website, even if Fredrekt or a Fredrekt authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                            <h3>5. Accuracy of materials</h3>
                            <p>The materials appearing on Fredrekt's website could include technical, typographical, or photographic errors. Fredrekt does not warrant that any of the materials on its website are accurate, complete or current. Fredrekt may make changes to the materials contained on its website at any time without notice. However Fredrekt does not make any commitment to update the materials.</p>
                            <h3>6. Links</h3>
                            <p>Fredrekt has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Fredrekt of the site. Use of any such linked website is at the user's own risk.</p>
                            <h3>7. Modifications</h3>
                            <p>Fredrekt may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                            <h3>8. Governing Law</h3>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of Cebu City, Philippines and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                            <p><a href="https://getterms.io" title="Generate a free terms of use document">Terms of Use created with GetTerms.</a></p>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-4">
                    <MDBCol md="11" lg="11">
                        <HeaderPage text="Cookies Policy"/>
                        <div className="content h4-responsive">
                            <p>This is the Cookie Policy for Fred Garingo, accessible from https://fredgaringo.ga/</p>
                            <p><strong>What Are Cookies</strong></p>
                            <p>As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                            <p>For more general information on cookies, please read <a href="https://www.cookieconsent.com/what-are-cookies/">"What Are Cookies"</a>. Information regarding cookies from this Cookies Policy are from <a href="https://www.generateprivacypolicy.com/">the Privacy Policy Generator</a>.</p>
                            <p><strong>How We Use Cookies</strong></p>
                            <p>We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                            <p><strong>Disabling Cookies</strong></p>
                            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator from CookiePolicyGenerator.com</a>.</p>
                            <p><strong>The Cookies We Set</strong></p>
                            <ul>
                            <li>
                                <p>Site preferences cookies</p>
                                <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                            </li>
                            </ul>
                            <p><strong>Third Party Cookies</strong></p>
                            <p>In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
                            <ul>
                            <li>
                                <p>This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                                <p>For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                            </li>
                            </ul>
                                <p><strong>More Information</strong></p>
                                <p>Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                                <p>However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>
                                <ul>
                                <li>By visiting this link: https://fredgaringo.ga/</li>
                            </ul>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default PolicyPage
