import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = ({ loginFunc }) => {
    
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik loginFunc={ loginFunc } />
            <p>
                You don't have an account?
                <button onClick={() => navigate('/signup')}>SignUp</button>
            </p>
        </div>
    );
}

export default LoginPage;
