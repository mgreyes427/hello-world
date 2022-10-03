import React, { useEffect, useState } from 'react';
import { getAllUsers, getAllPagedUsers, getUserDetails, login } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);

    useEffect(() => {
        obtainUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All users: ', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch((error) => {
                alert(`Error while retreiving users: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining users: ');
                console.table(users);
            });
    }

    const obtainPagedUsers = (page) => {
        console.log('Page', page);
        getAllPagedUsers(page)
            .then((response) => {
                console.log('All paged users: ', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch((error) => {
                alert(`Error while retreiving paged users: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining paged users: ');
                console.table(users);
            });
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('User: ', response.data);
                setSelectedUser(response.data);
            })
            .catch((error) => {
                alert(`Error while retreiving user: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining user: ');
                console.table(selectedUser);
            });
    }

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('Token: ', response.token);
                sessionStorage.setItem('token', response.token);
            })
            .catch((error) => {
                alert(`Error while login user: ${error}`);
            })
            .finally(() => {
                console.log('Ended login user. Navigate to home...');
            });
    }

    return (
        <div>
            <button onClick={ authUser }>Auth User</button>
            <h2>Users:</h2>
            { users.map((user, index) => (
                <p key={index} onClick={() => obtainUserDetails(user.id)}>
                    { user.first_name } { user.last_name }
                </p>
            ))}
            <p>Showing { usersPerPage } users of { totalUsers } in total</p>
            <button onClick={ () => obtainPagedUsers(1) }>1</button>
            <button onClick={ () => obtainPagedUsers(2) }>2</button>
            <div>
                { selectedUser ? (
                    <div>
                        <h3>User Details</h3>
                        <p>Name: {selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>email: {selectedUser.email}</p>
                        <img alt='Avatar' src={ selectedUser.avatar } style={{height: '150px', width: '150px'}} />
                    </div>
                ) : (<h6>Please click on a User to see its details</h6>)}
            </div>
        </div>
    );
}

export default FetchExample;
