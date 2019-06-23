import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
    <Link to="/example-working/">
      See an Example of an Correctly Formatted Form
    </Link>
    <Link to="/example-not-working/">
      See an Example of an Incorrectly Formatted Form
    </Link>
  </nav>
)

export default Nav
