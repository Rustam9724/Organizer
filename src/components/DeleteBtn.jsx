function DeleteBtn({task, date, notesList, setNotesList}) {
    const clickHandler = () => {
        const oldTasks = notesList.find(note => {
            return note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }).tasks;
        const newTasks = oldTasks.map(oldTask => {
            if (oldTask.id === task.id) {
                return {id: task.id, value: task.value, isEdit: false, isDeleted: true};
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

    return <button onClick={clickHandler}>Удалить</button>
}

export default DeleteBtn;