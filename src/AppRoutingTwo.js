import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useParams } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TasksDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import StatePage from './pages/home/StatePage';


const ProtectedPage = ({children, condition, redirectTo}) => {
    if(condition){
       return children; 
    } else {
        alert('You must be logged in. Redirecting to home...');
        return <Navigate to={ redirectTo } />
    }
}

const GetTaskDetailPage = ({ tasks }) => {
    let params = useParams();
    return <TaskDetailPage task={ tasks[params.id - 1] } />;
}


const AppRoutingTwo = () => {

    let logged = false;
    let taskList = [
        { id: 1, name: 'Task 1', description: 'My first Task'},
        { id: 2, name: 'Task 2', description: 'My second Task'},
        { id: 3, name: 'Task 3', description: 'My third Task'},
    ];
    let mystate = useParams();


    useEffect(() => {
        logged = localStorage.getItem('credentials');
        console.log('User Logged? ', logged)
    }, []);

    return (
        <Router>
            <div>
                <nav>
                    {/* TODO: Not working AvtiveClassName or style */}
                    <NavLink to='/' style={({ isActive }) => {return {color: isActive ? 'red' : 'black' }}}>|| HOME |</NavLink>
                    <NavLink to='about'>| ABOUT |</NavLink>
                    <NavLink to='faqs'>| FAQs |</NavLink>
                    <NavLink to='task/1'>| Task 1 |</NavLink>
                    <NavLink to='task/2'>| Task 2 |</NavLink>
                    <NavLink to='any404'>| Not existing route |</NavLink>
                    <NavLink to='login'>| Login ||</NavLink>
                    
                </nav>

                <main>
                    <Routes>
                        <Route exact path='/' element={ <HomePage /> } />
                        <Route path='online-state' element={ <StatePage /> } />
                        <Route
                            path='login'
                            element={
                                <ProtectedPage condition={!logged} redirectTo='/'>
                                    <LoginPage />
                                </ProtectedPage>
                            }
                        />
                        <Route path='about' element={ logged ? <AboutPage /> : <Navigate to='/' />} />
                        <Route path='faqs' element={ <AboutPage /> } />
                        <Route
                            path='profile'
                            element={
                                <ProtectedPage condition={logged} redirectTo='/login'>
                                    <ProfilePage />
                                </ProtectedPage>
                            }
                        />
                        <Route path='tasks' element={ <TasksPage /> } />
                        <Route exact path='task/:id' element={ <GetTaskDetailPage tasks={ taskList } /> } />
                        <Route path='*' element={ <NotFoundPage /> } />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default AppRoutingTwo;
