import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';


const ContactList = () => {
    const defaultContact1 = new Contact('Martin', 'Reyes', 'martingreyes27@gmail.com', true);
    const defaultContact2 = new Contact('Gabriel', 'Ravera', 'gabrielreyes@gmail.com', false);
    const defaultContact3 = new Contact('Tincho', 'Sedan', 'tincho_427@hotmail.com', false);

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    function addContact(contact){
        console.log(`Adding new contact: ${contact}`);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    function deleteContact(contact){
        console.log(`Delete contact: ${contact}`);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function changeConnectedState(contact){
        console.log(`Change connected state for contact: ${contact}`);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !contact.connected;
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Contacts:</h5>
                    </div>

                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>First Name</th>
                                    <th scope='col'>Last Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'></th>
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={ index }
                                            contact={ contact }
                                            add={ addContact }
                                            remove={ deleteContact }
                                            changeConnect={ changeConnectedState }
                                        ></ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <ContactForm add={addContact}></ContactForm>
                </div>
            </div>
        </div>
    );
};


export default ContactList;
