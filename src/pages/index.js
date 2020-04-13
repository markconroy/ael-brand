import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeading from "../components/global-styles/headings.js"

const IndexPage = ({ data, title }) => (
  <Layout>
    <SEO />

    <StyledHeading h1>Add Event Lister</StyledHeading>

    <p>Coming Soon</p>
  </Layout>
)

export default IndexPage