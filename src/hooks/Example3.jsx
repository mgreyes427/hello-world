import React, { useState, useContext } from 'react';

const myContext = React.createContext(null);


const Component1 = () => {
    // The child component that is filling with father context
    const state = useContext(myContext);

    return (
        <div>
            <h1>
                The token is: { state.token }
            </h1>
            <Component2></Component2>
        </div>
    );
}


const Component2 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h2>
                The session is: { state.session }
            </h2>
        </div>
    );
}


const ComponentWithContext = () => {

    const initState = {
        token:'1234567',
        session: 1,
    }

    const [sessionData, setSessionData] = useState(initState);

    function updateSession(){
        setSessionData({
            token: 'JWT123456789',
            session: sessionData.session + 1,
        })
    }

    return (
        <myContext.Provider value={ sessionData }>
            <h1>*** Example of useState() and useContext() ***</h1>
            <Component1></Component1>
            <button onClick={ updateSession }>Update Session</button>
        </myContext.Provider>
    );
}

export default ComponentWithContext;
