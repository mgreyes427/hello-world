import React from 'react';
import { useLocation } from 'react-router-dom';


const StatePage = () => {

    let location = useLocation();
    console.log('Location State: ', location.state);  // state
    console.log('Query Params: ', location.search);  // query params sent

    return (
        <div>
            <h1>State from Location: { location.state.online ? 'Online' : 'Offline' }</h1>
            {/* ? TODO: the query parameters are not readed like this */}
            {/* <h1>State from Query Params: { location.search.online ? 'Online' : 'Offline' }</h1> */}
        </div>
    );
}

export default StatePage;
