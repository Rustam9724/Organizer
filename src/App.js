import { useState } from 'react';

import DatePicker from './components/DatePicker'; 
import Calendar from './components/Calendar';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [date, setDate] = useState(new Date());
  const [notesList, setNotesList] = useState([]);

  return (
      <div>
          <Header />
        <main>
          <div className="date-section">
            <DatePicker date={date} setDate={setDate}/>
            <Calendar date={date} setDate={setDate}/>
          </div>
          <ToDoList date={date} notesList={notesList} setNotesList={setNotesList}/>
        </main>
        <Footer />
      </div>
  )
}

export default App;