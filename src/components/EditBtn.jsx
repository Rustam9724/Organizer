function EditBtn({date, task, notesList, setNotesList}) {
    const clickHandler = () => {
        if (!task.isEdit) {
            const oldTasks = notesList.find(note => note.notesDate === `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`).tasks;
            const newTasks = oldTasks.map(oldTask => {
                if (oldTask.id === task.id) {
                    return {id: task.id, value: task.value, isEdit: !task.isEdit, isDeleted: false};
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
    }
    
    return <button onClick={clickHandler} className="edit-button">{task.isEdit ? 'Сохранить' : 'Редактировать'}</button>
}



export default EditBtn;