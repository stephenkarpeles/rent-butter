import React from "react"
import { Link } from "gatsby"
import "./footer.scss"
import logoWhite from "../../images/rentbutter-logo-white.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col-1">
          <div className="footer__logo">
            <img src={logoWhite} alt=""></img>
          </div>
        </div>  
        <div className="footer__col-2">
          <div className="footer__copyright">
            Copyright &copy; 2021&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="">Privacy Policy</Link>
          </div> 
        </div>     
      </div>

    </footer>
  )
}

export default Footer
