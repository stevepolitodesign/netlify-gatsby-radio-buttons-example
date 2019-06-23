import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IncorrectImage from "./../components/image-incorrect"
import CorrectImage from "./../components/image-correct"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Netlify-Gatsby Radio Buttons Example</h1>
    <h2>Incorrect Formatting</h2>
    <pre>
      {
        `
        <input type="radio" name="size" id="small" value="small" required />
        <label htmlFor="small">Small</label>
        `
      }
    </pre>
    <p>If you don't wrap the <code>{`input`}</code> in a <code>{`label`}</code>, the results will save incorrectly as seen below. "Small" should really be "size", since "size" is the name of the <code>{`input`}</code></p>
    <IncorrectImage />
    <br/>
    <p><Link to="/example-not-working/">See full example of the incorrect formatting</Link></p>
    <hr/>
    <h2>Correct Formatting</h2>
    <pre>
      {
        `
        <label>
          <input type="radio" name="size" id="small" value="small" required /> Small
        </label>
        `
      }
    </pre>
    <p>Wrap the <code>{`input`}</code> in a <code>{`label`}</code>, to ensure the name of the <code>{`input`}</code> is used in the results.</p>
    <CorrectImage />  
    <br/>  
    <p><Link to="/example-working/">See full example of the correct formatting</Link></p>
  </Layout>
)

export default IndexPage
