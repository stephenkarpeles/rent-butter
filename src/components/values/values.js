import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./values.scss"
import valueImage1 from "../../images/value-image-1.jpg" 
import valueImage2 from "../../images/value-image-2.jpg" 
import valueImage3 from "../../images/value-image-3.jpg" 

const Values = () => {
  return (
    <section className="values">      
      <div className="container">
        <h2>Why Rent Butter?</h2>
        <Fade bottom cascade>
          <div className="row">
            <div className="col col-1-3">
              <div className="value-card">
                <div className="value-card__image">
                  <img src={valueImage1} alt="Value" />
                </div>
                <div className="value-card__text">
                  <h5>More comprehensive than a credit score.</h5>
                  <p>Traditional credit scores are only a single number at a fixed point in time. Rent Butter looks at a tenant’s entire financial history (including recent trends) to provide a more accurate picture of their likelihood to consistently pay on time.</p>
                </div>
              </div>
            </div>            
            <div className="col col-1-3">
              <div className="value-card">
                <div className="value-card__image">
                  <img src={valueImage2} alt="Value" />
                </div>
                <div className="value-card__text">
                  <h5>Improve collections with better qualified candidates.</h5>
                  <p>Screen for candidates with a high probabibility for evictions (or a history of evictions). Rent Butter gives you insight into a tenant’s past behavior, so you’ll end up with more qualified renters.</p>
                </div>
              </div>
            </div>
            <div className="col col-1-3">
              <div className="value-card">
                <div className="value-card__image">
                  <img src={valueImage3} alt="Value" />
                </div>
                <div className="value-card__text">
                  <h5>Generate reports in seconds (not days).</h5>
                  <p>Typical credit checks and background checks can take days before they’re complete. Rent Butter gives you the information you need in a matter of seconds, not days.</p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>      
    </section>
  )
}

export default Values
