import Task from '../components/Task';
import EditBtn from './EditBtn';
import DeleteBtn from './DeleteBtn';

function Main(props) {
    const {date, notesList, setNotesList, tasks} = props;
    
    const result = tasks.map(task => {
        return <div key={task.id} className="task-container">
            <Task date={date} task={task} notesList={notesList} setNotesList={setNotesList}/>
            {
                !task.isDeleted && <EditBtn date={date} task={task} notesList={notesList} setNotesList={setNotesList}/>
            }
            {
                !task.isDeleted && <DeleteBtn task={task} date={date} notesList={notesList} setNotesList={setNotesList}/>
            }
        </div>
    })

    return result;
}

export default Main;