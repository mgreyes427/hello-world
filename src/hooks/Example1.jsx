// Example of Hook useState

// Create a component of type function and access to it private state
// using a hook and modify it

import React, { useState } from 'react';

const Example1 = () => {

    const initValue = 0;
    const initPerson = {
        name: 'Martin',
        email: 'martingreyes27@gmail.com',
    }

    const [counter, setCounter] = useState(initValue);
    const [person, setPerson] = useState(initPerson);

    function incrementCounter(){
        setCounter(counter + 1);
    }
    function updatePerson(){
        setPerson({
            name: 'Gabriel',
            email: 'tincho_427@hotmail.com',
        });
    }

    return (
        <div>
            <h1>*** Example of userState() ***</h1>
            <h2>Counter: { counter } </h2>
            <h2>Person: { person.name } - { person.email }</h2>
            <button onClick={ incrementCounter }>Increment Counter</button>
            <button onClick={ updatePerson }>Update Person</button>
        </div>
    );
}

export default Example1;
