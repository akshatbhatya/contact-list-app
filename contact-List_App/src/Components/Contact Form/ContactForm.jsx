import React from 'react'
import "./ContactForm.css"

function ContactForm() {
  return (
    <>
    <div className="contact_form">
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Your Name' />
            <br />
            <br />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your Email'/>
            <br />
            <br />
            <label htmlFor="">Number</label>
            <input type="text" placeholder='Enter Your Number' />
        </form>
    </div>
    </>
  )
}

export default ContactForm