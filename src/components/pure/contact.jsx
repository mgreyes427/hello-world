import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    const [is_connected, change_is_connected] = useState(contact.connected);

    const change_connected_state = () => {
        change_is_connected(!is_connected)
    }

    return (
        <div>
            <h5>First Name: { contact.first_name }</h5>
            <h5>Last Name: { contact.last_name }</h5>
            <h5>Email: { contact.email }</h5>
            <h5>Connected: { is_connected ? 'Available contact' : 'Not available contact'}</h5>
            <button onClick={ change_connected_state }>
                Change connected state
            </button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
