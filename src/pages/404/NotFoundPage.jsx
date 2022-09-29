import React from 'react';

import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    const goTo = (path) => navigate(path);

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button onClick={ () => goTo('/') }>Go to home</button>
        </div>
    );
}

export default NotFoundPage;
