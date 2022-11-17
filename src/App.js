import { useState } from 'react';

import DatePicker from './components/DatePicker'; 
import Calendar from './components/Calendar';

function App() {
  const [date, setDate] = useState(new Date());

  return (
      <div>
          <DatePicker date={date} setDate={setDate}/>
          <Calendar date={date} setDate={setDate}/>
      </div>
  )
}

export default App;