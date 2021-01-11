import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./clients.scss"
//import clientLogo from "../../images/client-logo.png" 
import clientLogo3 from "../../images/logo-pip.jpg" 
import clientLogo1 from "../../images/marblestone-logo.jpg" 
import clientLogo2 from "../../images/logo-ehresman.jpg" 
//import clientLogo4 from "../../images/client-logo.png" 
//import clientLogo5 from "../../images/client-logo.png" 

const Clients = () => {
  return (
    <section className="clients">      
      <div className="container">
        <h2>Trusted By:</h2>
        <Fade bottom cascade>
          <div className="clients__row">
            <div className="clients__image">
              <img src={clientLogo2} alt="Client" />
            </div>
            <div className="clients__image">
              <img src={clientLogo1} alt="Client" />
            </div>
            <div className="clients__image">
              <img src={clientLogo3} alt="Client" />
            </div>
          </div> 
        </Fade>
      </div>      
    </section>
  )
}

export default Clients
