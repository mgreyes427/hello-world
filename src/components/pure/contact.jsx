import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact, add, remove, changeConnect }) => {

    function connectedIcon(){
        // Returns icon depending on completion of the task
        if (contact.connected){
            return <i
                onClick={() => changeConnect(contact)}
                className='bi-circle-fill task-action'
                style={{color: 'green'}}
            ></i>
        } else {
            return <i
                onClick={() => changeConnect(contact)}
                className='bi-circle-fill task-action'
                style={{color: 'red'}}
            ></i>
        }
    }

    return (
        <tr className='fw-normal'>
            <td className='align-middle'>
                <span>{ contact.firstName }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.lastName }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.email }</span>
            </td>

            <td className='align-middle'>
                { connectedIcon() }
                <i 
                    onClick={() => remove(contact)}
                    className='bi-trash task-action'
                    style={{color: 'tomato'}}
                ></i>
            </td>
            {/* <h5>Connected: { is_connected ? 'Available contact' : 'Not available contact'}</h5> */}
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    changeConnect: PropTypes.func.isRequired,
};


export default ContactComponent;
