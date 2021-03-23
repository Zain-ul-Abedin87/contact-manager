import "./App.css";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contactItem) => {
    console.log(contactItem);
    setContacts([...contacts, { id: uuid(), ...contactItem }]);
  };
  const removeContactHandler = (id) => {
    const newConatactList = contacts.filter((item) => {
      return item.id != id;
    });
    setContacts(newConatactList);
  };
  useEffect(() => {
    const reciveConatcts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (reciveConatcts) setContacts(reciveConatcts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // const contact=[
  //     {
  //       id:"1",
  //       name:"Zain Ul Abedin",
  //       email:"Zain@gmail.com",
  //     },
  //     {
  //       id:"1",
  //       name:"Zain Ul Abedin",
  //       email:"Zain@gmail.com",
  //     }
  //   ]
  return (
    <div className="App">
      <Header />
      <AddContact AddContactHandler={AddContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
 