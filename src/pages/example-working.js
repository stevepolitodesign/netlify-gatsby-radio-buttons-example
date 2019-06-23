import React from "react"
import Layout from "../components/layout"
import FormCorrect from "../components/form-correct"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="An Example of a Correctly Formatted Form" />
    <h1>An Example of a Correctly Formatted Form</h1>
    <FormCorrect />
  </Layout>
)

export default IndexPage
