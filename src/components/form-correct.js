import React from "react"

const FormCorrect = () => (
  // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators
  <>
    <form
      name="correct-example"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/thank-you"
    >
      <input type="hidden" name="form-name" value="contact" />
      <fieldset>
        <legend>T-Shirt Size</legend>
        <label>
          <input type="radio" name="size" id="small" value="small" required />{" "}
          Small
        </label>
        <label>
          <input type="radio" name="size" id="medium" value="medium" /> Medium
        </label>
        <label>
          <input type="radio" name="size" id="large" value="large" /> Large
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
    <pre>
      {`
                <form name="correct-example" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you">
                    <input type="hidden" name="form-name" value="contact" />
                    <fieldset>
                        <legend>T-Shirt Size</legend>
                        <label>
                            <input type="radio" name="size" id="small" value="small" required/>Small
                        </label>
                        <label>
                            <input type="radio" name="size" id="medium" value="medium"/>Medium
                        </label>
                        <label>
                            <input type="radio" name="size" id="large" value="large"/>Large
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
                `}
    </pre>
  </>
)

export default FormCorrect
