import React, {Fragment, useState} from "react";
import Orden from "./Orden"
import Burger from "./Burger"
import Data from "../../Data/Data.json"
// import '../App.css';


const Pedido = () => {
  //estado de burguer
  
  const[burgers] = useState([Data]
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
        HAMBURGER</h3>
        </div>
        <div className='container__header__ordenDiv'> 
        <Orden orden={orden} setOrden={setOrden} />
        </div>
        </section>
      <section className='container__content'>
        
      <div className='container__content__listOption'>
     {Data.map((burger)=>(
       <Burger
       key={burger.id}
       burger = {burger}
       orden={orden}
       setOrden={setOrden}
       burgers= {burgers}
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