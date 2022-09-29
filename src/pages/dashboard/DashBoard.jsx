import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

import Copyright from '../../components/pure/Copyright';
import MenuListItems from '../../components/pure/MenuListItems';


const DashBoardPage = () => {

    const navigate = useNavigate();

    const logout = () => navigate('/login');

    return (
        <div>
            <MenuListItems list={[]}/>
            <Button variant="contained" onClick={ logout }>LOGOUT</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoardPage;
