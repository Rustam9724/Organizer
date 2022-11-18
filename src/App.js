import { useState } from 'react';
import { nanoid } from 'nanoid';

import DatePicker from './components/DatePicker'; 
import Calendar from './components/Calendar';
import ToDoList from './components/ToDoList';

function App() {
  const [date, setDate] = useState(new Date());
  const [notesList, setNotesList] = useState([
      {
          notesDate: '2022-11-18', 
          tasks: [
              {id: nanoid(), value: 'Поесть', isEdit: false, isDeleted: false},
              {id: nanoid(), value: 'Поспать', isEdit: false, isDeleted: false},
              {id: nanoid(), value: 'Посрать', isEdit: false, isDeleted: false},
          ]
      },
      {
        notesDate: '2023-6-24', 
        tasks: [
            {id: nanoid(), value: 'Поесть', isEdit: false, isDeleted: false},
            {id: nanoid(), value: 'Поспать', isEdit: false, isDeleted: false},
            {id: nanoid(), value: 'Посрать', isEdit: false, isDeleted: false},
        ]
    },
    {
        notesDate: '2024-2-13', 
        tasks: [
            {id: nanoid(), value: 'Поесть', isEdit: false, isDeleted: false},
            {id: nanoid(), value: 'Поспать', isEdit: false, isDeleted: false},
            {id: nanoid(), value: 'Посрать', isEdit: false, isDeleted: false},
        ]
    }
  ]);

  return (
      <div>
          <DatePicker date={date} setDate={setDate}/>
          <Calendar date={date} setDate={setDate}/>
          <ToDoList date={date} notesList={notesList} setNotesList={setNotesList}/>
      </div>
  )
}

export default App;