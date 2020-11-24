import React from "react"
//import { Link } from "gatsby"
import "../../styles/styles.scss"
import "./header.scss"
import logo from "../../images/rentbutter-logo.jpeg" 

const Header = () => {  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__nav">
          <ul>
            <li><a href="">How it Works</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Other Link</a></li>
            <li><a href="" className="btn btn--cta">Get Started</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
