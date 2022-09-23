import React, { useState, useEffect } from 'react';
// import '../../styles/clock.scss';

const Clock = (props) => {

    const [state, setState] = useState({
        date: new Date(),
        age: 0,
        firstName: 'Martín',
        lastName: 'San José',
    });

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    function tick(){
        setState((state) => {
           return {
              ...state,
              date: new Date(),
              age: state.age + 1,
           }
        });
     }

    return (
        <div>
            <h2>
            Actual date:
            {state.date.toLocaleTimeString()}
            </h2>
            <h3>{state.firstName} {state.lastName}</h3>
            <h1>Age: {state.age}</h1>
        </div>
    );
}

export default Clock;
