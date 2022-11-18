import { useState, useEffect } from 'react';

import Main from './Main';
import AddTaskButton from './AddTaskButton';

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
        <div>
            {
                !notes
                    ? <div>
                        <p>Нет заметок</p>
                        <AddTaskButton date={date} notesList={notesList} setNotesList={setNotesList}/>
                    </div>
                    : <div>
                         <AddTaskButton date={date} notesList={notesList} setNotesList={setNotesList}/>
                         <Main date={date} notesList={notesList} setNotesList={setNotesList} tasks={notes.tasks}/>
                     </div>
            }
        </div>
    )
}

export default ToDoList;