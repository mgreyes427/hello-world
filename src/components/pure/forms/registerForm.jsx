import React, { useState } from 'react';

const RegisterForm = () => {

    const initData = [
        {
            user: '',
            name: '',
            email: '',
            password: '',
        }
    ]
    const [data, setData] = useState(initData);

    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
