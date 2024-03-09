import css from "./App.module.css"
import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBar from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from 'nanoid';


export default function App() {

   const userContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
   ]
  
  const localStorageContacts = () => {
  const contactsList = localStorage.getItem("contacts");

  return contactsList ? JSON.parse(contactsList) : userContacts;
};
  
  const [contacts, setContacts] = useState(localStorageContacts)
  const [search, setSearch] = useState('')
  


    const handleSubmit = (values) => {
        const newContact = {
            id: nanoid(),
            name: values.username,
            number: values.contact,
        };
      setContacts([...contacts, newContact]);
       localStorage.setItem("contacts", JSON.stringify([...contacts, newContact])); 
    };
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
   const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
);
  
    useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      
      <h1 className={css.mainTitle}>Phonebook</h1>

      <ContactForm handleSubmit={handleSubmit} />

      <SearchBar search={search} handleChange={handleChange} />

      <ContactList contacts={filteredContacts} onDelete={handleDelete}/>

      </div> 
  )
}

