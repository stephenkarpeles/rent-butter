import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./clients.scss"
import clientLogo from "../../images/client-logo.png" 

const Clients = () => {
  return (
    <section className="clients">      
      <div className="container">
        <h2>Trusted By:</h2>
        <Fade bottom cascade>
          <div className="clients__row">
            <div className="clients__image">
              <img src={clientLogo} alt="Client" />
            </div>
            <div className="clients__image">
              <img src={clientLogo} alt="Client" />
            </div>
            <div className="clients__image">
              <img src={clientLogo} alt="Client" />
            </div>
            <div className="clients__image">
              <img src={clientLogo} alt="Client" />
            </div>
            <div className="clients__image">
              <img src={clientLogo} alt="Client" />
            </div>
          </div> 
        </Fade>
      </div>      
    </section>
  )
}

export default Clients
