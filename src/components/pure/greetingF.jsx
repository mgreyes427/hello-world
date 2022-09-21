import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(29);

    const birthday = () => {
        setage(age + 1)
    }

    return (
        <div>
            <h1>
                Hello! { props.name } from functional component
            </h1>
            <h2>
                Your age is { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Birth year!
                </button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
