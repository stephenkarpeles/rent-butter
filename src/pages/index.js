import React from "react"
import Layout from "../components/layout/layout"
import "../styles/styles.scss"
import Hero from "../components/hero/hero"
//import Values from "../components/values/values"
//import HowItWorks from "../components/how-it-works/how-it-works"
import Clients from "../components/clients/clients"
import CreditScore from "../components/credit-score/credit-score"
import CompareTable from "../components/compare-table/compare-table"

const Index = () => {
  return (
    <Layout>
      <Hero />
      {/* <Values />
      <HowItWorks /> */}
      <Clients />
      <CreditScore />
      <CompareTable />
    </Layout>
  )
}

export default Index
