import React, {useState} from "react";
import '../App.css';



function User() {
    const [name, setName]= useState('')
    const [dni, setDni]= useState('')
    const [error, setError]= useState('')
    
    const setUser = (e) =>{
        e.preventDefault()
        if(!name.trim()) {
            setError('Introduce el nombre')
        }
        if (!dni.trim()) {
            setError('introduce DNI')
        }
    }
  return (
    <div className="containerUser">
        <div className="row">    
        <div className="col">      
        <form onSubmit ={setUser} className="form-group">
            <input
             onChange={(e) =>{setName(e.target.value)}}
             className="form-control mt-3"
             placeholder="Nombre del cliente"
             type="text" />
             <input
             onChange={(e) =>{setDni(e.target.value)}}
             className="form-control mt-3"
             placeholder="DNI del cliente"
             type="text" />
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
    <div className="col">
        <h2>Pedido Listo</h2>   
    </div>
    </div>      
    </div>
  );
}

export default User;