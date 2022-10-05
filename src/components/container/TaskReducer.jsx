import React, { useReducer } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

// Action types
const CREATE_TASK = 'CREATE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const FILTER = 'FILTER';
// Filter types
const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED';

const trashTask1 = new Task('First', 'Default description', false, LEVELS.NORMAL);
const trashTask2 = new Task('Second', 'Default description 2', true, LEVELS.URGENT);
const trashTask3 = new Task('Third', 'Default description 3', false, LEVELS.BLOCKING);

const initState = {
    tasks: [trashTask1, trashTask2, trashTask3],
    filter: SHOW_ALL,
}

const taskManagerReducer = (state, action) => {
    let tempTasks;

    // Manage not only create/delete tasks. It also manage filtering
    switch (action.type) {
        // Crate/delete task actions
        case CREATE_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    new Task(
                        action.payload.name,
                        action.payload.description,
                        false,
                        action.payload.level
                    ),
                ],
            };
        case COMPLETE_TASK:
            tempTasks = [...state.tasks];
            tempTasks[action.payload.idx].completed = !tempTasks[action.payload.idx].completed;
            return {
                ...state,
                tasks: tempTasks,
            };
        case DELETE_TASK:
            tempTasks = [...state.tasks];
            tempTasks.splice(action.payload.idx, 1);
            return {
                ...state,
                tasks: tempTasks,
            };
        // Filtering actions
        case FILTER:
            return {
                ...state,
                filter: action.payload.filterID,
            }
    
        default:
            return state;
    }
}

const TaskReducer = () => {

    const [state, dispatch] = useReducer(taskManagerReducer, initState);

    function createTask(task){
        // NOTE: the TaskForm internally create a Task object and then pass it to the function.
        //       In this case we need to create the task by the reducer. So, we simulate as if
        //       the TaskForm not create the Task object.
        dispatch({
            type: CREATE_TASK,
            payload: {
                name: task.name,
                description: task.description,
                level: task.level,
            }
        });
    }

    function completeTask(task){
        // NOTE: the TaskForm internally create a Task object and then pass it to the function.
        //       In this case we need to create the task by the reducer. So, we simulate as if
        //       the TaskForm not create the Task object.
        dispatch({
            type: COMPLETE_TASK,
            payload: {idx: state.tasks.indexOf(task)}
        });
    }

    function deleteTask(task){
        // NOTE: the TaskForm internally create a Task object and then pass it to the function.
        //       In this case we need to create the task by the reducer. So, we simulate as if
        //       the TaskForm not create the Task object.
        dispatch({
            type: DELETE_TASK,
            payload: {idx: state.tasks.indexOf(task)}
        });
    }

    function changeVisibility(filterID){
        dispatch({
            type: FILTER,
            payload: {filterID: filterID}
        });
    }

    const TaskTable = () => {
        return (
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
                    { filterTasks().map((task, index) => {
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
        )
    }

    const filterTasks = () => {
        switch (state.filter) {
            case SHOW_ALL:
                return state.tasks;
            case SHOW_COMPLETED:
                return state.tasks.filter(task => task.completed);
            case SHOW_UNCOMPLETED:
                return state.tasks.filter(task => !task.completed);
            default:
                return state.tasks;
        }
    }

    return (
        <div>
            <div>
                <h1>Your tasks:</h1>
                <div>
                    <b>Filter by: </b>
                    <button onClick={() => changeVisibility(SHOW_ALL)}>ALL</button>
                    <button onClick={() => changeVisibility(SHOW_COMPLETED)}>COMPLETED</button>
                    <button onClick={() => changeVisibility(SHOW_UNCOMPLETED)}>UNCOMPLETED</button>
                </div>
                { filterTasks().length ?
                    <TaskTable />
                    : <h3>There are no tasks to show...</h3>
                }
            </div>
            <div>
                <h1>Create a new task:</h1>
                <TaskForm add={ createTask } length={ state.tasks.length } />
            </div>
        </div>
    );
}

export default TaskReducer;
