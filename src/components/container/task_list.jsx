import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Description2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Description3', false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loadint, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('Task list component is going to unmount...')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this Task: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this Task: ', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your tasks:</h5>
                    </div>

                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                        <TaskComponent
                                            key={ index }
                                            task={ task }
                                            complete={ completeTask }
                                            remove={ deleteTask }
                                        ></TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm add={addTask}></TaskForm>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
