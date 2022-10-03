import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login, getAllUsers, getAllPagedUsers, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../services/axiosCRUDService';

const AxiosCRUDExample = () => {
    const initialCredentials = {
        email: '',
        password: '',
    }

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required'),
    });

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'));
    }

    // CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if (response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('No users found');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if (response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error(`No users found in page: ${page}`);
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if (response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                } else {
                    throw new Error('User not found');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.data && response.status === 201){
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('User not created');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then((response) => {
                if (response.data && response.status === 200){
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('User not found & not updated');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };

    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if (response.status === 204){
                    alert(`User with id: ${id} successully deleted`)
                } else {
                    throw new Error('User not found & not deleted done');
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`));
    };    

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={ initialCredentials }
                validationSchema={ loginSchema }  // validation with Yup
                onSubmit={async (values) => authUser(values)}
            >

                {/* obtain 'props' from Formik */}
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="example@email.com"
                            type="email"
                        />
                        { errors.email && touched.email && (
                            <ErrorMessage name="email" component='div' />
                        )}

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        { errors.password && touched.password && (
                            <ErrorMessage name="password" component='div' />
                        )}

                        <button type="submit">Login</button>
                        { isSubmitting ? (<p>Login your credentials...</p>) : null}
                    </Form>
                )}
            </Formik>
            {/* Example buttons for testing API responses */}
            <div>
                <button onClick={ obtainAllUsers }>Get all Users with Axios</button>
                <button onClick={ () => obtainAllPagedUsers(1) }>Get all Users (Paged 1) with Axios</button>
                <button onClick={ () => obtainUserByID(1) }>Get User (ID 1) with Axios</button>
                <button onClick={ () => createNewUser('morpheus', 'leader') }>Create New User</button>
                <button onClick={ () => updateUser(1, 'morpheus', 'developer') }>Update User (ID 1)</button>
                <button onClick={ () => deleteUser(1) }>Delete User (ID 1)</button>
            </div>
        </div>
    );
}

export default AxiosCRUDExample;
