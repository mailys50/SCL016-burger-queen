import React, {Fragment, useState} from "react";
import OrdenSh from "./OrdenSh"
import Shawarma from "./Shawarma"
import DataSh from "../../Data/DataSh.json"
 import '../../App.css';


const Pedido = () => {
  //estado de burguer
  
  const[shawarmas] = useState([DataSh]
)

  //estado del pedido inicia vacio
   const [orden, setOrden] = useState([])
  return (
    <Fragment>
      <section className='container'>
        <section className='container__header'> 
        <div className='container__header__menu'>  
         <button className= 'container__header__menu--button'></button>
        </div>
        <div className='container__header__title'> 
        <h3 className='container__header__title--text'>
        SHAWARMA</h3>
        </div>
        <div className='container__header__ordenDiv'> 
        <OrdenSh orden={orden} setOrden={setOrden} />
        </div>
        </section>
      <section className='container__content'>
        
      <div className='container__content__listOption'>
     {DataSh.map((shawarma)=>(
       <Shawarma
       key={shawarma.id}
       shawarma = {shawarma}
       orden={orden}
       setOrden={setOrden}
       shawarmas= {shawarmas}
       /> 
     ))}
     {/* <Orden orden={orden}
     setOrden={setOrden}/> */}
      
      </div>
      </section>
      </section>
    </Fragment>
    
  );
}

export default Pedido;