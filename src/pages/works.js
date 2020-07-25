import React, { useState } from 'react' 
import HeaderPage from '../components/HeaderPage'
import { MDBContainer } from 'mdbreact'
import { Parallax } from 'react-parallax'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import { ThemeProvider, DarkTheme, LightTheme } from 'baseui'

const THEME = {
    light: 'light',
    dark: 'dark',
};

const WorksPage = () => {
    const [theme, setTheme] = useState(THEME.light);

    return (
        <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <SEO title="Works"/>
        <div style={{ background: theme === THEME.light ? "#fff" : "#000", color: theme === THEME.light ? "#000" : "#fff" }} className="wrapper">
        <Navbar onClick={() =>
            setTheme(theme === THEME.light ? THEME.dark : THEME.light)
          } color={theme}/>
        <MDBContainer fluid className="px-4">
            <HeaderPage text="My Works"/>
            <>
            <Parallax 
                style={{ marginTop: '5%', marginBottom: '10%' }} 
                bgImage={`https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                strength={500}>
                <div style={{ height: 400 }}>
                    <h1>Hello World</h1>
                </div>
            </Parallax>
            <Parallax 
                style={{ marginTop: '5%', marginBottom: '10%' }} 
                bgImage={`https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                strength={500}>
                <div style={{ height: 400 }}>
                    <h1>Hello World</h1>
                </div>
            </Parallax>
            <Parallax 
                style={{ marginTop: '5%', marginBottom: '10%' }} 
                bgImage={`https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
                strength={500}>
                <div style={{ height: 400 }}>
                    <h1>Hello World</h1>
                </div>
            </Parallax>
            <Parallax 
                style={{ marginTop: '5%', marginBottom: '10%' }} 
                bgImage={`https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
                strength={500}>
                <div style={{ height: 400 }}>
                    <h1>Hello World</h1>
                </div>
            </Parallax>
            </>
        </MDBContainer>
        </div>
        </ThemeProvider>
    )
}

export default WorksPage