import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

import './../../styles/task.scss';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${task.name} is going to been unmount`);
        };
    }, [task]);

    function taskLevelBadge(){
        // Returns a badge depending on the level of the task
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>{ task.level }</span>
                </h6>)
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{ task.level }</span>
                    </h6>)
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{ task.level }</span>
                    </h6>)
            default:
                break;
        }
    }

    function taskCompletedIcon(){
        // Returns icon depending on completion of the task
        if (task.completed){
            return <i
                onClick={() => complete(task)}
                className='bi-toggle-on task-action'
                style={{color: 'green'}}
            ></i>
        } else {
            return <i
                onClick={() => complete(task)}
                className='bi-toggle-off task-action'
                style={{color: 'grey'}}
            ></i>
        }
    }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through',
        fontWeight: 'bold',
    }
    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato',
    }

    return (
        // if you require two classNames could replace by styles as this
        <tr className='fw-normal' style={task.completed ? taskCompleted: taskPending}>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                { taskLevelBadge() }
            </td>
            <td className='align-middle'>
                { taskCompletedIcon() }
                <i 
                    onClick={() => remove(task)}
                    className='bi-trash task-action'
                    style={{color: 'tomato'}}
                ></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
