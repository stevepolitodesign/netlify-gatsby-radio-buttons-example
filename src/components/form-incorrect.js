import React from "react"
import IncorrectImage from "./../components/image-incorrect"

const FormIncorrect = () => (
  // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators
  <>
    <form
      name="incorrect-example"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
    >
      <input type="hidden" name="form-name" value="incorrect-example" />
      <fieldset>
        <legend>T-Shirt Size</legend>
        <input type="radio" name="size" id="small" value="small" required />
        <label htmlFor="small">Small</label>
        <input type="radio" name="size" id="medium" value="medium" />
        <label htmlFor="medium">Medium</label>
        <input type="radio" name="size" id="large" value="large" />
        <label htmlFor="large">Large</label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
    <p>If you don't wrap the <code>{`input`}</code> in a <code>{`label`}</code>, the results will save incorrectly as seen below. "Small" should really be "size", since "size" is the name of the <code>{`input`}</code></p>
    <IncorrectImage />
    <pre>
      {`
        <form
          name="incorrect-example"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"
        >
          <input type="hidden" name="form-name" value="incorrect-example" />
          <fieldset>
            <legend>T-Shirt Size</legend>
            <input type="radio" name="size" id="small" value="small" required />
            <label htmlFor="small">Small</label>
            <input type="radio" name="size" id="medium" value="medium" />
            <label htmlFor="medium">Medium</label>
            <input type="radio" name="size" id="large" value="large" />
            <label htmlFor="large">Large</label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      `}
    </pre>
  </>
)

export default FormIncorrect
