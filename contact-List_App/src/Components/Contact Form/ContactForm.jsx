import React, { useState } from 'react'
import "./ContactForm.css"
import { UseContactContext } from '../../Contexts'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, SetNumber] = useState('');
    console.log(name, email, number);

    const { addContact } = UseContactContext();

    const add = (e) => {
        e.preventDefault();
        if (!name || !email || !number) return

        addContact({ name: name, email: email, number: number })
        setEmail('')
        setName('')
        SetNumber('')
    }

    return (
        <>
            <div className="contact_form">
                <form action="">
                    <div className="contact-form-section">

                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)} />
                    </div>
                    <br />
                    <br />

                    <div className="contact-form-section">

                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)} />
                    </div>
                    <br />
                    <br />

                    <div className="contact-form-section">

                        <label htmlFor="">Number</label>
                        <input
                            type="text"
                            placeholder='Enter Your Number'
                            value={number}
                            onChange={(e) => SetNumber(e.currentTarget.value)}
                        />
                    </div>
                    <br />
                    <br />
                    <button type='submit' onClick={add}>Add</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;