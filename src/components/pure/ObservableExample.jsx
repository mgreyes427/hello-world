import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);

    const obtainNewNumbers = () => {
        console.log('Subscription to Observable');
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log(`New Number: ${newNumber}`);
                    setNumber(newNumber);
                },
                error(error){
                    alert(`Something went wrong: ${error}`);
                    console.log('Error in the observable');
                },
                complete(){
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable');
                }
            }
        );
    }

    return (
        <div>
            <h1>Observable examples</h1>
            <h2>Number: {number}</h2>
            <button onClick={ obtainNewNumbers }>Obtain new numbers</button>
        </div>
    );
}

export default ObservableExample;
