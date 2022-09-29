import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useParams } from "react-router-dom";
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';


const AppRoutingFinal = () => {

    // TODO: change to value from sessionStorage
    let loggedIn = true;

    return (
        <Router>
            {/* Redirections for protecting routes */}

            <Routes>
                <Route 
                    exact
                    path='/'
                    element={ loggedIn ? <Navigate to='/dashboard' /> : <Navigate to='/login' /> }
                />
                {/* Login route */}
                <Route exact path='/login' element={ <LoginPage /> } />
                {/* Dashboard route */}
                <Route 
                    exact
                    path='/dashboard'
                    element={ loggedIn ? <DashBoardPage /> : <Navigate to='/login' /> }
                />

                <Route path='*' element={ <NotFoundPage /> } />
            </Routes>
        </Router>
    );
}

export default AppRoutingFinal;
