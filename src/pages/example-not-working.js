import React from "react"
import Layout from "../components/layout"
import FormIncorrect from "../components/form-incorrect"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="An Example of an Incorrectly Formatted Form" />
    <h1>An Example of an Incorrectly Formatted Form</h1>
    <FormIncorrect />
  </Layout>
)

export default IndexPage
