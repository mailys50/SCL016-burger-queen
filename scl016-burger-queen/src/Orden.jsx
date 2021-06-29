import React from "react";
import Burger from "./Burger";
import "./orden.css"
const Orden = ({orden,setOrden}) => {
return (
    <div className= "orden">
    <h3>Orden</h3>
    {orden.length === 0 ?(<p>0</p>): (orden.map((burger => <Burger key={burger.id} burger={burger} orden={orden} setOrden={setOrden}/> )))}
    </div>
)


};
export default Orden;
