
import { useState } from 'react'
import './App.css'
import ContactForm from './Components/Contact Form/ContactForm'
import { ContactListProvider } from './Contexts'

function App() {
  const [contactList, setContactList] = useState([])
  return (
    <ContactListProvider value={{ contacts, addContact, updateContact, removeContact }}>
      <ContactForm />
    </ContactListProvider>
  )
}

export default App
