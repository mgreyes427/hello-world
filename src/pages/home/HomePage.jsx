import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';


const HomePage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    // Navigate (clean)
    const goTo = (path) => {
        navigate(path);
    }

    // Navigate with state state and query params
    const navigateProps = (path) => {
        navigate(
            {
                pathname: path,
                search: '?online=true',  // query params
            },
            { 
                state: {
                    online: true,
                },
            }
        );
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={ () => navigateProps('/online-state') }>
                    Go to Page with State / query params
                </button>
                <button onClick={ () => goTo('/profile') }>
                    Go to Profile
                </button>
            </div>
        </div>
    );
}

export default HomePage;
