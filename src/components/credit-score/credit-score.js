import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./credit-score.scss"

const CreditScore = () => {
  return (
    <section className="credit-score-block">      
      <div className="container">
        <div className="row">
          <div className="col col-1-2 credit-score-block__text-col">
            <Fade>
              <div class="credit-score-block__text">
                <h2>It's easy to approve renters with a 700+ credit score.</h2>
                <h3>But how do you assess applicants with low credit scores?</h3>
                <div className="credit-score-block__btn-block">
                  <div className="credit-score-block__btn-block-text">
                    <p>Stagnant, point-in-time credit scores are a thing of the past.</p>
                  </div>
                  <div className="credit-score-block__btn-block-link">
                    <a href="/" className="btn btn--4">Schedule a Demo</a>
                  </div>
                </div>  
              </div>
            </Fade>
          </div>
          <div className="col col-1-2">
            <div className="credit-circles-wrap">
              <div className="credit-circle credit-circle--1">679</div>
              <div className="credit-circle credit-circle--2">575</div>
              <div className="credit-circle credit-circle--3">550</div>
              <div className="credit-circle credit-circle--4">618</div>
              <div className="credit-circle credit-circle--5">614</div>
              <div className="credit-circle credit-circle--6">497</div>
              <div className="credit-circle credit-circle--7">650</div>
              <div className="credit-circle credit-circle--8">610</div>
              <div className="credit-circle credit-circle--9">502</div>
              <div className="credit-circle credit-circle--10">523</div>
              <div className="credit-circle credit-circle--11">540</div>
              <div className="credit-circle credit-circle--12">521</div>
            </div>
          </div>
        </div>       
      </div>      
    </section>
  )
}

export default CreditScore
