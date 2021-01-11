import React from "react"
import Layout from "../components/layout/layout"
import "../styles/styles.scss"
import Hero2 from "../components/hero2/hero2"
//import Values from "../components/values/values"
//import HowItWorks from "../components/how-it-works/how-it-works"
import Clients from "../components/clients/clients"
import CreditScore from "../components/credit-score/credit-score"
import CompareTable from "../components/compare-table/compare-table"

const Index2 = () => {
  return (
    <Layout>
      <Hero2 />
      {/* <Values />
      <HowItWorks /> */}
      <Clients />
      <CreditScore />
      <CompareTable />
    </Layout>
  )
}

export default Index2
