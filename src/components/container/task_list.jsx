import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    const [tasks, setTasks] = useState(defaultTask);
    const [loadint, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('Task list component is going to unmount...')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: change state of a task!')
    }
    
    return (
        <div>
            <div>
                <h1>
                Your Tasks:
                </h1>
            </div>
            {/* TODO: apply a for/map to render the list */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
