import React from 'react'
import {styled} from 'baseui';

const Header = styled('h1', ({$theme})=>({
    fontSize: `5rem`,
    fontFamily: `'Lato', sans-serif`,
    letterSpacing: `-.01em`
})); 

const HeaderPage = ({text}) => (<Header className="my-5">{text}</Header>)

export default HeaderPage
