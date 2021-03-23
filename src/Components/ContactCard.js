import React from "react";
import user from "./Images/user.png"

const ContactCard = (props) => {
  const {id,name,email} = props.item
  return (
    <div className="item">
      <img className='ai avatar image' src={user} alt="User"/>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red" , marginTop:"7px" }}
          onClick={()=> props.clickHandler(id)

          }
        ></i>
    </div>
  );
};
export default ContactCard;
