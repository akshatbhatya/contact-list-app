import React, { useState } from 'react'
import "./ContactItem.css"
import { UseContactContext } from '../../Contexts';

function ContactItem({ contact }) {
    console.log(contact);

    const { updateContact, removeContact } = UseContactContext();
    let [name, setName] = useState(contact.name)
    let [email, setEmail] = useState(contact.email)
    let [number, setNumber] = useState(contact.number)

    let updated = () => {
        return updateContact(contact.id, { ...contact, name: name, email: email, number })
    }


    return (
        <>
            <div>

                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)} />
                <br />
                <input
                    type="email"
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)} />

                <br />
                <input type="text"
                    value={number}
                    onChange={(e) => setNumber(e.currentTarget.value)}
                />
                <br />
                <button onClick={updated}>Update</button>
                <button onClick={() => removeContact(contact.id)}>delete</button>


            </div>
            <br />
        </>
    )
}

export default ContactItem
