import { useState } from 'react'
import './App.css'
import ContactForm from './Components/Contact Form/ContactForm'
import { ContactListProvider } from './Contexts'
import { useEffect } from 'react'
import ContactItem from './Components/ContactItem/ContactItem'
import SearchBar from './Components/SearchBar/SearchBar'

function App() {
  const [contacts, setContactList] = useState([])
  const addContact = (Contact) => {
    setContactList((prev) => [
      ...prev, { id: Date.now(), ...Contact }
    ])
  }
  const updateContact = (id, Contact) => {
    setContactList((prevContact) => prevContact.map((updateContact) => updateContact.id == id ? Contact : updateContact))

  }

  const removeContact = (id) => {
    setContactList((prev) => prev.filter((prevContact) => prevContact.id != id))
  }



  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"))

    if (contacts && contacts.length > 0) {
      setContactList(contacts)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  return (
    <ContactListProvider value={{ contacts, addContact, updateContact, removeContact }}>

      <SearchBar contacts={contacts} />
      <br />
      <ContactForm />
      <br />

      <hr width={"50%"} className="ruler"/>
      {
        contacts.map((x) => {
          return <ContactItem contact={x} key={x.id} />

        })
      }

    </ContactListProvider>
  )
}



export default App
