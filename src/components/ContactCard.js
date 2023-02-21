import React from "react";


const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div>
            <div>{name}</div>
            <div>{email}</div><br />
            <button style={{ color: "red" }} onClick={() => props.clickHandler(id)} >Delete</button><br /><br />
        </div>
    );
}

export default ContactCard;