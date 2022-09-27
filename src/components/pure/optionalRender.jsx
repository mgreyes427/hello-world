import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold',
};

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold',
};

// Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button onClick={ loginAction } style={ propStyle }>Login</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button onClick={ logoutAction }  style={ propStyle }>Logout</button>
    )
}

// ? (True expression) && element => expression renderized
// ? (False expression) && element => noy expression renderized

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;
    if(access) {
        optionalButton = <LogoutButton logoutAction={ logoutAction } propStyle={ unloggedStyle }></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={ loginAction } propStyle={ loggedStyle }></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1);
    }

    return (
        <div>
            {/* Optional button */}
            { optionalButton }
            {/* N messages unread */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You have { nMessages } new message...</p>}
            { nMessages > 1 && <p>You have { nMessages } new messages...</p>}
            { nMessages === 0 && <p>There are no new messages</p>} */}
            {/* Ternary operator */}
            { access ? (
                <div>
                    { nMessages >0 ?
                        <p>You have { nMessages } new message{ nMessages > 1 ? 's' : null}...</p> :
                        <p>There are no new messages</p>
                    }
                    <button onClick={ addMessages }>{nMessages === 0 ? 'Add your first message': 'Add new message'}</button>
                </div>
            ) : null}
            
        </div>
    );
}

export default OptionalRender;
