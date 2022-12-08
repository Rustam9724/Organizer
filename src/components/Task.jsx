import { useState } from 'react';

function Task({date, task, notesList, setNotesList}) {
    const [value, setValue] = useState(task.value);

    const blurHandler = () => {
        const oldTasks = notesList.find(note => {
            return note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }).tasks;
        const newTasks = oldTasks.map(oldTask => {
            if (oldTask.id === task.id) {
                return {id: task.id, value: value, isEdit: false, isDeleted: false};
            } else {
                return oldTask;
            }
        }) 
        setNotesList(notesList.map(note => {
            if (note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`) {
                return {...note, tasks: newTasks}
            } else {
                return note;
            }
        }))
    }

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            blurHandler();  
        }
    } 

    let result = task.isEdit 
                 ? <input 
                        type="text" 
                        value={value} 
                        onChange={(event) => setValue(event.target.value)} 
                        onBlur={blurHandler} onKeyDown={keyDownHandler}
                        autoFocus
                        className="task-input"
                    />
                 : <span className={task.isDeleted ? 'deleted task-span' : 'task-span'}>{value}</span>

    return result;    
}

export default Task;