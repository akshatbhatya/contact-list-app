import { useContext, createContext } from "react";

export const ContactContext = createContext({
  contacts: [
    {
      id: 1,
      name: "akshat",
      email: "akshatbhatya@gmail.com",
      number: 7814720746,
    },
  ],
  addContact: (name,email,number) => {},
  updateContact: (id,name,email,number) => {},
  removeContact: (id) => {},
});

export let ContactListProvider = ContactContext.Provider;

export const UseContactContext = () => {
  return useContext(ContactContext);
};
