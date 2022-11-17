function YearPicker({date, setDate}) {
    let result = [];

    for (let i = 2020; i <= 2030; i++) {
        let opt = <option key={i}>{i}</option>;
        result.push(opt);
    }

    return <select onChange={event => setDate(new Date(event.target.value, date.getMonth()))} defaultValue={date.getFullYear()}>
        {result}
    </select>
}

export default YearPicker;