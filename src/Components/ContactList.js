import React from 'react'
import ContactCard from "./ContactCard"

const ContactList =(props)=>{
     //  console.log(props)
     const deletHandler =(id)=>{
         props.getContactId(id)
     }
      const renderConttactList = props.contacts.map((item)=>{
           return(
                <ContactCard item={item} clickHandler={deletHandler} key={item.id}/>
           )
      })
    return(
        <div className='ui celled list'>
              {renderConttactList}
        </div>
    )
}
export default ContactList