import React, {Fragment, useState} from "react";
import Orden from "./Orden"
import Burger from "./Burger"
// import '../App.css';


const Pedido = () => {
  //estado de burguer
  const[burgers] = useState([
{id: 1, nombre:' carne', precio:2000},
{id: 2, nombre:' pollo', precio:2000},
{id: 3, nombre:' carne y tocino', precio:2500},
{id: 4, nombre:' doble carne', precio:3000},
{id: 5, nombre:' carne y pollo', precio:3000},
{id: 6, nombre:' pollo y tocino', precio:2500},
{id: 7, nombre:' doble pollo ',precio:3000},

  ])
  
  //estado del pedido inicia vacio
   const [orden, setOrden] = useState([])
  return (
    <Fragment>
      

     <h3>Burgers</h3>
     {burgers.map((burger)=>(
       <Burger
       key={burger.id}
       burger = {burger}
       orden={orden}
       setOrden={setOrden}
       burgers= {burgers}
       />
     ))}
     <Orden orden={orden}
     setOrden={setOrden}/>
      
 
  
    </Fragment>
  );
}

export default Pedido;