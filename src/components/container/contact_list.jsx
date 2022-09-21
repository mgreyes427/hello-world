import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactList = () => {
    const defaultContact = new Contact('Martin', 'Reyes', 'martingreyes27@gmail.com', false)

    return (
        <div>
            <ContactComponent contact={ defaultContact }></ContactComponent>
        </div>
    );
};


export default ContactList;
