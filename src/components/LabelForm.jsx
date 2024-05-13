import React from "react";
function LabelForm({
    id="ingreso",
    type="text",
    placeholder="Ingrese un valor",
    text="Ingreso",
    onChange
}){

    const handleChange=(e)=>{
        /* console.log(e.target.value) */
        /* console.log("submit") */
        onChange(e.target.value)
    }

    return(
        <div className="my-2 flex flex-col">
            <label htmlFor={id} className="text-orange boder-2">{text}</label>
            <input className="border-L-4 p-2 rounded-md shadow-md" type={type} id={id} placeholder={placeholder}
            onChange={handleChange}/>

        </div>
    )
}
export default LabelForm