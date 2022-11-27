import Link from "next/link"
import React from "react"
// import { Link } from "gatsby"

// import { CSSTransition } from "react-transition-group"
import styled from "styled-components"
// import values from "../../utils/values"
import values from '../utils/values'

const Navigation = styled.nav`
  width: max-content;
  position: absolute;
  right: 1rem;
  top: 20%;

  :hover {
    color: ${values.COLORS.darkShadowColor};
  }

  @media (min-width: ${values.DEVICESIZE.tablet}) {
    right: 3rem;
  }

  //.Navigation-Items-fade-appear {
  //  opacity: 0.01;
  //  //transform: translateY(-10%);
  //}
  //.Navigation-Items-fade-appear-active {
  //  opacity: 1;
  //  //transform: translateY(0);
  //  transition: all 0.5s linear;
  //}
`

const NavLink = styled(Link)`
  display: block;
  text-align: right;
  padding-top: 1.5rem;
  font-size: 3rem;
  transition: color 0.9s ease 0.1s;

  :hover {
    color: ${values.COLORS.lightTextColor};
  }

  @media (min-width: ${values.DEVICESIZE.tablet}) {
    padding-top: 3rem;
  }
`

const Nav = () => {
  return (
    <Navigation>
      {/*<CSSTransition*/}
      {/*  key="nav-about"*/}
      {/*  timeout={100}*/}
      {/*  classNames="Navigation-Items-fade"*/}
      {/*>*/}
      <NavLink href="/about/">About</NavLink>
      {/*</CSSTransition>*/}
      {/*<CSSTransition*/}
      {/*  key="nav-service"*/}
      {/*  timeout={100}*/}
      {/*  classNames="Navigation-Items-fade"*/}
      {/*>*/}
      <NavLink href="/service/">Service</NavLink>
      {/*</CSSTransition>*/}
      {/*<CSSTransition*/}
      {/*  key="nav-works"*/}
      {/*  timeout={100}*/}
      {/*  classNames="Navigation-Items-fade"*/}
      {/*>*/}
      <NavLink href="/works/">Works</NavLink>
      {/*</CSSTransition>*/}
      {/*<CSSTransition*/}
      {/*  key="nav-contacts"*/}
      {/*  timeout={100}*/}
      {/*  classNames="Navigation-Items-fade"*/}
      {/*>*/}
      <NavLink href="/contacts/">Contacts</NavLink>
      {/*</CSSTransition>*/}
    </Navigation>
  )
}

export default Nav
