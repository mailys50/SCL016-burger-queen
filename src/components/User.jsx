import React, {useState} from "react";
import '../App.css';



function User() {
    const [table, setTable]= useState('')
    const [garzon, setGarzon]= useState('')
    const [name, setName]= useState('')
    const [dni, setDni]= useState('')
    const [error, setError]= useState('')
    
    const setUser = (e) =>{
        e.preventDefault()
        if(!table.trim()) {
            setError('Introduce el Numero de mesa')
        }
        if (!garzon.trim()) {
            setError('introduce nombre del garzon')
        }
        if(!name.trim()) {
            setError('Introduce el nombre cliente')
        }
        if (!dni.trim()) {
            setError('introduce DNI cliente')
        }
    }
  return (
    <div className="containerUser">
        <div className="row">    
        <div className="col">      
        <form onSubmit ={setUser} className="form-group">
        <input
             onChange={(e) =>{setTable(e.target.value)}}
             className="form-control mt-3"
             placeholder="Número de mesa"
             type="number" />
             <input
             onChange={(e) =>{setGarzon(e.target.value)}}
             className="form-control mt-3"
             placeholder="codigo del garzon"
             type="number" />
            <input
             onChange={(e) =>{setName(e.target.value)}}
             className="form-control mt-3"
             placeholder="Nombre del cliente"
             type="text" />
             <input
             onChange={(e) =>{setDni(e.target.value)}}
             className="form-control mt-3"
             placeholder="DNI del cliente"
             type="number" />
             <input 
             type = "submit" 
             value='registrar'
             className="btn-btn-dark btn block mt-3" />
        </form>
        {
            error?
            (
                <div>
                    <p>{error}</p>
                    </div>
            ):
            (<span></span>)   
        }

    </div>  
    </div>      
    </div>
  );
}

export default User;