import { nanoid } from 'nanoid';

function AddTaskButton({date, notesList, setNotesList}) {
    const clickHandler = () => {
        if (notesList.find(notes => notes.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)) {
            const oldTasks = notesList.find(note => note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).tasks;
            const newTasks = [...oldTasks, {id: nanoid(), value: '', isEdit: true, isDeleted: false}];
            setNotesList(notesList.map(note => {
                if (note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`) {
                    return {...note, tasks: newTasks}
                } else {
                    return note;
                }
            }))
        } else {
            const newNotes = {notesDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, tasks: [
                {id: nanoid(), value: '', isEdit: true, isDeleted: false}
            ]}
            setNotesList([...notesList, newNotes])
        }
    }

    return <button onClick={clickHandler}>Добавить заметку</button>
}

export default AddTaskButton;