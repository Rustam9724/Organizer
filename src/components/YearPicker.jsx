import { Select } from 'react-materialize';

function YearPicker({date, setDate}) {
    let result = [];

    for (let i = 2020; i <= 2030; i++) {
        let opt = <option key={i}>{i}</option>;
        result.push(opt);
    }

    return (
        <Select
            id="Select-33"
            multiple={false}
            onChange={event => setDate(new Date(event.target.value, date.getMonth()))} 
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
            value=""
         >
            {result}
        </Select>
    )
}


export default YearPicker;