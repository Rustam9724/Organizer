import '../index.css';

function Calendar({date, setDate}) {
    let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth());
    let next = new Date(date.getFullYear(), date.getMonth() + 1);
    let daysInMonth = (next - firstDayOfMonth)/(1000 * 3600 * 24);
    let index = (firstDayOfMonth.getDay() + 6) % 7;

    function clickHandler(event) {
        setDate(new Date(`${date.getFullYear()}-${date.getMonth() + 1}-${event.target.textContent}`))
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
            let clsName;
            if ((k > 0 && k <= daysInMonth) && (j === 6 || j === 7)) {
                clsName = 'day-off day-number'
            } else if (k > 0 && k <= daysInMonth) {
                clsName = 'day-number'
            } else {
                clsName = '';
            }
            tr.push(<td 
                        key={j.toString()} 
                        onClick={event => clickHandler(event)} 
                        className={clsName}>
                            {k > 0 && k <= daysInMonth ? k : ''}
                    </td>)
            k++;
        } 
        table.push(<tr key={i.toString()}>{tr}</tr>)
    }

    return (
        <table border='1' className="calendar">
            <thead>
                <tr className="daysOfWeek">
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пт</th>
                    <th className="day-off">Сб</th>
                    <th className="day-off">Вс</th>
                </tr>
            </thead>
            <tbody>
                {table}
            </tbody>
        </table>
    )
}

export default Calendar;