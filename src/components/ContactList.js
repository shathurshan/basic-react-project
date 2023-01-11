import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}/>
        );
    });
    return (
        <div>
            <div>
                <h2>
                    Contact List
                </h2>
            </div>
            <p>
                {renderContactList}
            </p>
        </div>
    );
}

export default ContactList;