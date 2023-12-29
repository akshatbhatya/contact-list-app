import React from 'react'
import "./ContactForm.css"

function ContactForm() {
  return (
    <>
    <div className="contact_form">
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Your Name' />
        </form>
    </div>
    </>
  )
}

export default ContactForm