import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {

    const firstNameRef = useRef('');
    const lastNameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        // firstName, lastName, email, connected
        const newContact = new Contact(
            firstNameRef.current.value,
            lastNameRef.current.value,
            emailRef.current.value,
            false,
        );
        add(newContact);
        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={firstNameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name'></input>
                <input ref={lastNameRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact Description'></input>
                <input ref={emailRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Email'></input>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
            </div>            
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
};

export default ContactForm;
