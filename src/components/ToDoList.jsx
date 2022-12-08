import { useState, useEffect } from 'react';

import Main from './Main';
import AddTaskButton from './AddTaskButton';

let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'сентября', 'ноября', 'декабря'];

function ToDoList(props) {
    const {date, notesList, setNotesList} = props;
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        setNotes(notesList.find(note => {
            return note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }));
        // eslint-disable-next-line
    }, [date, notesList])

    return (
        <div className="todo-list">
            {
                !notes
                    ? <div>
                        <p>{`На ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года заметок нет`}</p>
                        <AddTaskButton date={date} notesList={notesList} setNotesList={setNotesList}/>
                    </div>
                    : <div>
                        <p>{`Заметки на ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</p>
                         <AddTaskButton date={date} notesList={notesList} setNotesList={setNotesList}/>
                         <Main date={date} notesList={notesList} setNotesList={setNotesList} tasks={notes.tasks}/>
                     </div>
            }
        </div>
    )
}

export default ToDoList;