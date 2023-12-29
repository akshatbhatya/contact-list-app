import { useContext, createContext } from "react";

export const ContactContext = createContext({});

export const UseContactContext = () => {
  return useContext(ContactContext);
};

export let ContactListProvider = ContactContext.Provider;
