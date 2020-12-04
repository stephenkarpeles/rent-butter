import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./hero.scss"

const Hero = () => {
  return (
    <section className="hero">
      <Fade>
        <div className="container">
          <div className="row">
            <div className="col col-7-12">
              <div className="hero__content">
                <h1>Advanced Tenant Screening for Landlords</h1>
                <p>Traditional credit scores won’t tell you if your tenants will pay their rent. Rent Butter's fully-automated software provides full insight into a tenant's entire financial history, so you can screen with confidence.</p>
                <a href="" className="btn btn--1">Schedule a Demo</a>
              </div>
            </div>
            <div className="col col-5-12">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hKKp0ruwN_Q?controls=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Hero
