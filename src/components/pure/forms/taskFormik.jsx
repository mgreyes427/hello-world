import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const newTaskSchema = Yup.object().shape({
    name: Yup.string()
        .required('Task name is required'),
    description: Yup.string()
        .required('Description is required'),
    completed: Yup.bool()
        .required('Completed field is required'),
    level: Yup.string()
        .required('Task level is required')
        .oneOf(
            [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
            'You must select a Level: Normal / Urgent / Blocking'
        ),
});


const TaskFormik = ({add, length}) => {

    const initialFormValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL,
    }
    
    function addTask(values){
        console.log('Creating Task....')
        console.log(values)
        const newTask = new Task(
            values.name,
            values.description,
            values.completed,
            values.level,
        );
        add(newTask);
    }

    const normalStyle = {
        background: '#0d6efd',
        color: 'white',
        fontWeight: 'bold',
    }
    const urgentStyle = {
        background: '#ffc107',
        color: 'white',
        fontWeight: 'bold',
    }
    const blockingStyle = {
        background: '#dc3545',
        color: 'white',
        fontWeight: 'bold',
    }

    return (
        <div>
            <Formik
                initialValues={ initialFormValues }
                validationSchema={ newTaskSchema }
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 10));  // required to show the event related to onSubmitting prop
                    addTask(values);
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form>
                        <label htmlFor="name">Task Name</label>
                        <Field id="name" name="name" placeholder="Task name"/>
                        { errors.name && touched.name && (
                            <ErrorMessage name="name" component='div' />
                        )}

                        <label htmlFor="description">Task Description</label>
                        <Field id="description" name="description" placeholder="Task description"/>
                        { errors.description && touched.description && (
                            <ErrorMessage name="description" component='div' />
                        )}

                        <div role="group">
                            <label htmlFor="label">Task Level { LEVELS.NORMAL }</label>

                            <Field type="radio" name="level" value={ LEVELS.NORMAL } />
                            <label style={normalStyle}>{ LEVELS.NORMAL }</label>
                            
                            <Field type="radio" name="level" value={ LEVELS.URGENT } />
                            <label style={urgentStyle}>{ LEVELS.URGENT }</label>

                            <Field type="radio" name="level" value={ LEVELS.BLOCKING } />
                            <label style={blockingStyle}>{ LEVELS.BLOCKING }</label>

                            { errors.level && touched.level && (
                                <ErrorMessage name="level" component='div' />
                            )}
                        </div>

                        <button type='submit' className='btn btn-success btn-lg ms-2'>
                            { length ? 'Add New Task' : 'Create First Task' }
                        </button>
                        { isSubmitting ? (<p>Creating a task...</p>) : null}
                    </Form>
                )}

            </Formik>
        </div>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
};

export default TaskFormik;
