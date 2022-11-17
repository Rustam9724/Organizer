function YearPicker({month, setDate}) {
    return <select onChange={event => setDate(new Date(event.target.value, month))}>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
        <option>2026</option>
        <option>2027</option>
        <option>2028</option>
        <option>2029</option>
        <option>2030</option>
    </select>
}

export default YearPicker;