import React from "react"
//import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';
import "./compare-table.scss"

const CompareTable = () => {
  return (
    <section className="compare">      
      <div className="container">
        <h2>Replacing the Big Three with <span>Just One</span>.</h2>
        <div className="compare__intro">
          <p>In the apartment rental industry, a responsible landlord will always run a background check. But, traditional credit bureaus were never intended for landlord use.</p>
          <p>Enter <strong>Rent Butter</strong>.</p>
        </div> 
        <Fade>
          <div className="compare-table">
            <div className="compare-table__headings">
              <div className="col col--1">Product</div>
              <div className="col col--2">Other Services</div>
              <div className="col col--3">Rent Butter</div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Criminal Background
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  <div className="compare-table__dot"></div>
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Eviction Background
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  <div className="compare-table__dot"></div>
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Credit Score & Trade Lines
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  <div className="compare-table__dot"></div>
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Credit Behavior Analysis (7 Years)
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                True Income/Expense Ratios
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                NSF & Overdraft Count
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Pay Stub Fraud Protection
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  
                </div>
                <div className="col col--2">
                  <div className="compare-table__dot"></div>
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Income & Employment Verification
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  3 Days (Manual)
                </div>
                <div className="col col--2">
                  3 Seconds (Auto)
                </div>
              </div>
            </div>
            <div className="compare-table__row">
              <div className="compare-table__label">
                Average Cost
              </div>
              <div className="compare-table__values">
                <div className="col col--1">
                  $25-$35
                </div>
                <div className="col col--2">
                  $25-$35
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>      
    </section>
  )
}

export default CompareTable
