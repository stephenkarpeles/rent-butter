import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./hero2.scss"

const Hero = () => {
  return (
    <section className="hero">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col col-7-12">
              <div className="hero__content">
                <h1 className="hero__heading">Rent To Low Income Tenants?</h1>
                <p className="hero__subheading">Reduce rent defaults &amp; evictions by up to 20%.</p>
                <p>Our solution combines bank transaction history &amp; credit behavior analytics into a simple, predictive tenant performance report.</p>
                <a href="/" className="btn btn--3">Schedule a Demo</a>
              </div>
            </div>
            <div className="col col-5-12">
              <div className="video-wrapper">
                <iframe title="Demo Video" width="560" height="315" src="https://www.youtube.com/embed/hKKp0ruwN_Q?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div class="hero__video-note">
                <span>See how it works</span>
              </div> 
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Hero
