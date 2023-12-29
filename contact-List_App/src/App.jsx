
import { useState } from 'react'
import './App.css'
import ContactForm from './Components/Contact Form/ContactForm'
import { ContactListProvider } from './Contexts'
import { useEffect } from 'react'

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
    const contactsDataString = localStorage.getItem('contacts');
    let contactsData = [];

    if (contactsDataString) {
      try {
        contactsData = JSON.parse(contactsDataString);
      } catch (error) {
        console.error('Error parsing contacts from localStorage:', error);
      }
    }

    setContactList(contactsData);
  }, []);


  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Error saving contacts to localStorage:', error);
    }
  }, [contacts]);

  return (
    <ContactListProvider value={{ contacts, addContact, updateContact, removeContact }}>
      <ContactForm />
    </ContactListProvider>
  )
}



export default App
