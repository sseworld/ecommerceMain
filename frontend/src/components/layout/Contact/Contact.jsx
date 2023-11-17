import React from 'react'
import "./Contact.css"
import { Button } from "@material-ui/core"

const Contact = () => {
  return (
    <div className="contactContainer">
      <a href="mailto:sseworld4@gmail.com" className="mailBtn">
        <Button>Contact: sseworld4@gmail.com</Button>
      </a>
    </div>
  )
}

export default Contact
