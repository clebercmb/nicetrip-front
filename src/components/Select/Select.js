import React from "react"


const Select = (props) => {

    console.log("****Select")
    console.log("props.selectedOption", props.selectedOption)
    let arrayOfData  = props.arrayOfData
    let options = arrayOfData.map( (data, i) => 
        <option 
            key={i}
            value = {data.id}
        >
            {data.name}
        </option>
    );



    return (

        <select name={props.name}  onChange={(e) => props.onSelectChange(e, props.setValueFunc )}  value={props.selectedOption} className="form-control">
            {options}
        </select>

    )

} 




export default Select