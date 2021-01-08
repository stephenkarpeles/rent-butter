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
            <li><a href="/">Calculate Savings</a></li>
            <li><a href="/">Compare</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/" className="btn btn--2">Schedule a Demo</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
