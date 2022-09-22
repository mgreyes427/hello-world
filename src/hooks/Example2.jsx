import React, { useState, useRef, useEffect } from 'react';

const Example2 = () => {
    
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
    const myRef = useRef();

    function increment1(){
        setCounter1(counter1 + 1)
    }
    function increment2(){
        setCounter2(counter2 + 1)
    }

    // ? useEffect example - Case 1: change in any change of the state
    // useEffect(() => {
    //     console.log('Change in component state');
    //     console.log('Showing reference to element of the DOM:');
    //     console.log(myRef);
    // });

    // ? useEffect example - Case 2: change if some variable change in the state
    // useEffect(() => {
    //     console.log('Change in counter 1');
    //     console.log('Showing reference to element of the DOM:');
    //     console.log(myRef);
    // }, [counter1]);

    // ? useEffect example - Case 3: change any listed variable change in the state
    useEffect(() => {
        console.log('Change in counter 1 or counter2');
        console.log('Showing reference to element of the DOM:');
        console.log(myRef);
    }, [counter1, counter2]);

    
    
    return (
        <div>
            <h1>*** Example of userState(), useRef() and useEffect() ***</h1>
            <h2>Counter1: { counter1 } </h2>
            <h2>Counter2: { counter2 } </h2>

            <h4 ref={ myRef }>
                Example of referenced element
            </h4>
            <div>
                <button onClick={ increment1 }>Increment Counter1</button>
                <button onClick={ increment2 }>Increment Counter2</button>
            </div>
        </div>
    );
}

export default Example2;
