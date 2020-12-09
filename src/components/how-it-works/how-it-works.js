import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./how-it-works.scss"
import howImage1 from "../../images/how-phone.png" 
import howImage2 from "../../images/how-analytics.png" 
import howImage3 from "../../images/how-doc.png" 

const HowItWorks = () => {
  return (
    <section className="how-it-works">      
      <div className="container">
        <h2>How It Works</h2>
        <Fade>
          <div className="row">
            <div className="col col-1-3">
              <div className="how-card">
                <div className="how-card__image">
                  <img src={howImage1} alt=""/>
                </div>  
                <div className="how-card__number">
                  <span>1</span>
                </div>
                <div className="how-card__title">
                  <h4>Tenant uploads bank statement</h4>
                </div>
                <div className="how-card__text">
                  <p>Our patent-pending technology prompts the tenant to digitally upload their personal bank statement.</p>
                </div>
              </div>
            </div>            
            <div className="col col-1-3">
              <div className="how-card">
                <div className="how-card__image">
                  <img src={howImage2} alt=""/>
                </div>  
                <div className="how-card__number">
                  <span>2</span>
                </div>
                <div className="how-card__title">
                  <h4>Data is analyzed</h4>
                </div>
                <div className="how-card__text">
                  <p>Rent Butter’s back-end automatically analyzes and verifies up to 24 months of bank transaction history & credit behavior.</p>
                </div>
              </div>
            </div>
            <div className="col col-1-3">
              <div className="how-card">
                <div className="how-card__image">
                  <img src={howImage3} alt=""/>
                </div>  
                <div className="how-card__number">
                  <span>3</span>
                </div>
                <div className="how-card__title">
                  <h4>Financial report sent to landlord</h4>
                </div>
                <div className="how-card__text">
                  <p>Landlord is provided a <em>Financial Health Report</em> used to predict how the tenant will perform, regardless of their credit score.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>      
    </section>
  )
}

export default HowItWorks
