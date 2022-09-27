import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value,
        );
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold',
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold',
    }
    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold',
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name'></input>
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description'></input>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option value={LEVELS.NORMAL} style={normalStyle}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT} style={urgentStyle}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING} style={blockingStyle}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    { length ? 'Add New Task' : 'Create First Task' }
                </button>
            </div>            
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
};

export default TaskForm;
