function Calendar({date, currentDate, setCurrentDate}) {
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth());
    let next = new Date(date.getFullYear(), date.getMonth() + 1);
    let daysInMonth = (next - firstDayOfMonth)/(1000 * 3600 * 24);
    let index = (firstDayOfMonth.getDay() + 6) % 7;

    function clickHandler(event) {
        setCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}-${event.target.textContent}`)
    }

    let ROWS;

    if (daysInMonth === 28) {
        if (firstDayOfMonth.getDay() === 1) {
            ROWS = 4;
        } else {
            ROWS = 5;
        }
    } else if (daysInMonth === 29) {
        ROWS = 5
    } else if (daysInMonth === 30) {
        if (firstDayOfMonth.getDay() !== 0) {
            ROWS = 5;
        } else {
            ROWS = 6;
        }
    } else if (daysInMonth === 31) {
        if (firstDayOfMonth.getDay() !== 6 && firstDayOfMonth.getDay() !== 0) {
            ROWS = 5;
        } else {
            ROWS = 6;
        }
    }

    let table = [], 
        tr,
        k = 1 - index;

    for (let i = 0; i < ROWS; i++) {
        tr = [];
        for (let j = 0; j < 7; j++) {
            tr.push(<td key={j.toString()} onClick={event => clickHandler(event)}>{k > 0 && k <= daysInMonth ? k : ''}</td>)
            k++;
        } 
        table.push(<tr key={i.toString()}>{tr}</tr>)
    }

    return (
        <table border='1'>
            <tbody>
            {table}
            </tbody>
        </table>
    )
}

export default Calendar;