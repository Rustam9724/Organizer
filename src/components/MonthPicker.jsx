function MonthPicker({year, setDate}) {
    function changeHandler(event) {
        switch (event.target.value) {
            case 'Январь': setDate(new Date(year, 0));
            break;
            case 'Февраль': setDate(new Date(year, 1));
            break;
            case 'Март': setDate(new Date(year, 2));
            break;
            case 'Апрель': setDate(new Date(year, 3));
            break;
            case 'Май': setDate(new Date(year, 4));
            break;
            case 'Июнь': setDate(new Date(year, 5));
            break;
            case 'Июль': setDate(new Date(year, 6));
            break;
            case 'Август': setDate(new Date(year, 7));
            break;
            case 'Сентябрь': setDate(new Date(year, 8));
            break;
            case 'Октябрь': setDate(new Date(year, 9));
            break;
            case 'Ноябрь': setDate(new Date(year, 10));
            break;
            case 'Декабрь': setDate(new Date(year, 11));
            break;
            default: setDate(null);
        }
    } 

    return <select onChange={event => changeHandler(event)}>
        <option>Январь</option>
        <option>Февраль</option>
        <option>Март</option>
        <option>Апрель</option>
        <option>Май</option>
        <option>Июнь</option>
        <option>Июль</option>
        <option>Август</option>
        <option>Сентябрь</option>
        <option>Октябрь</option>
        <option>Ноябрь</option>
        <option>Декабрь</option>
    </select>
}

export default MonthPicker;