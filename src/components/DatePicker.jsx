import YearPicker from './YearPicker';
import MonthPicker from "./MonthPicker";

function DatePicker({date, setDate}) {
    return <div className="date-picker">
        <YearPicker date={date} setDate={setDate}/>
        <MonthPicker date={date} setDate={setDate}/>
    </div>
}

export default DatePicker;