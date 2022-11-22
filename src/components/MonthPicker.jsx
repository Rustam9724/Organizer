import M from 'materialize-css';
import { Select } from 'react-materialize';

let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function MonthPicker({date, setDate}) {
    function changeHandler(event) {
        switch (event.target.value) {
            case 'Январь': setDate(new Date(date.getFullYear(), 0));
            break;
            case 'Февраль': setDate(new Date(date.getFullYear(), 1));
            break;
            case 'Март': setDate(new Date(date.getFullYear(), 2));
            break;
            case 'Апрель': setDate(new Date(date.getFullYear(), 3));
            break;
            case 'Май': setDate(new Date(date.getFullYear(), 4));
            break;
            case 'Июнь': setDate(new Date(date.getFullYear(), 5));
            break;
            case 'Июль': setDate(new Date(date.getFullYear(), 6));
            break;
            case 'Август': setDate(new Date(date.getFullYear(), 7));
            break;
            case 'Сентябрь': setDate(new Date(date.getFullYear(), 8));
            break;
            case 'Октябрь': setDate(new Date(date.getFullYear(), 9));
            break;
            case 'Ноябрь': setDate(new Date(date.getFullYear(), 10));
            break;
            case 'Декабрь': setDate(new Date(date.getFullYear(), 11));
            break;
            default: setDate(null);
        }
    } 

    const result = [];

    for (let i = 0; i <= 11; i++) {
        let opt = <option key={i}>{months[i]}</option>;
        result.push(opt);
    }

    // return <select onChange={event => changeHandler(event)} defaultValue={months[date.getMonth()]}>
    //     {result}
    // </select>

    return (
        <Select
            id="Select-33"
            multiple={false}
            onChange={changeHandler} 
            options={{
                classes: '',
                dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
                }
            }}
            defaultValue={months[date.getMonth()]}
         >
             <option disabled>Выберите месяц</option>
            {result}
        </Select>
    )
}

export default MonthPicker;