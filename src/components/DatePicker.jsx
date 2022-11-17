import YearPicker from './YearPicker';
import MonthPicker from "./MonthPicker";

function DatePicker({date, setDate}) {
    return <div>
        <YearPicker month={date.getMonth()} setDate={setDate}/>
        <MonthPicker year={date.getFullYear()} setDate={setDate}/>
    </div>
}

export default DatePicker;