import React from "react"
//import { Link } from "gatsby"
import "./header.scss"
import logo from "../../images/rentbutter-logo.jpg" 

const Header = () => {  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="header__nav">
          <ul>
            <li><a href="/">How it Works</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Other Link</a></li>
            <li><a href="/" className="btn btn--2">Get Started</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
