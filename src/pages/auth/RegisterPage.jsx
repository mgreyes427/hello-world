import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ loginFunc }) => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Register Page</h1>
            <p>NOT IMPLEMENTED</p>
            <p>
                You have an account?
                <button onClick={() => navigate('/login')}>LogIn</button>
            </p>
        </div>
    );
}

export default RegisterPage;
