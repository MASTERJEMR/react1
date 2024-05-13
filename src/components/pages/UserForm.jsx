import React, { useState } from 'react' 
import LabelForm from "../LabelForm"
function UserForm(){
        const [name,setName]=useState("");
        const [document,setDocument]=useState("");
        const [cell,setCell]=useState("");
        const [email,setEmail]=useState("");

        const handleSubmit=(e)=>{
            e.preventDefault()
            console.log("subtmit")
            console.log(name,document,cell,email)
            
        }

        const onNameChange=(name)=>{
            setName(name)        
        }
        const onDocumentChange=(document)=>{
            setDocument(document)
        }
        const onCellChange=(cell)=>{
            setCell(cell)
        }
        const onEmailChange=(email)=>{
            setEmail(email)
        }

    return(
        
        <div>
            <div><center><img src="https://masterjemr.github.io/jsFinal/images/rec.png" alt="Contactenos" className='h-40'/></center></div>
            <form onSubmit={handleSubmit}>
            <LabelForm onChange={onNameChange} id='name' text='Nombre' placeholder='Nombres Apellidos'/>
            <LabelForm onChange={onDocumentChange} id='documento' text='N° Documento' placeholder='Documento' type='number'/>
            <LabelForm onChange={onCellChange} id='celular' text='N° celular' placeholder='300#######' type='number'/>
            <LabelForm onChange={onEmailChange} id='email' text='Email' placeholder='@correo' type='email'/>
            <button type='submit' className='bg-orange-500 text-white px-4 py-2 rounded-full shadow-md'>Registrar</button>
                
            </form>

        </div>
    )
}

export default UserForm