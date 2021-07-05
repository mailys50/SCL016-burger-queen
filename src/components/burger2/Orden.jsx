import React, { Fragment } from "react";
import Plate from "./Plate";
import "./orden.css"
const Orden = ({orden,setOrden}) => {
// return (
//     <div className= "orden">
//     <h3>Orden</h3>
//     {orden.length ?(<p>0</p>): (orden.map((plate => <Burger key={plate.id}plate={plate.name}orden={orden} setOrden={setOrden}/> )))}
//     {orden.length === 1 ?(<p>1</p>): (orden.map((plate => <Burger key={plate.name}plate={plate} orden={orden} setOrden={setOrden}/> )))}
//     </div>
// )
const viewOrden = () => {
    
      document.querySelector("div.container__header__ordenDiv--list").style.display = "none"? 
      (document.querySelector("div.container__header__ordenDiv--list").style.display = "flex")
        : (document.querySelector("div.container__header__ordenDiv--list").style.display = "none")
    
  };

  const closeDiv = () => {
    document.querySelector(
      "div.container__header__ordenDiv--list"
    ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="container__header__ordenDiv">
        <p className="container__header__ordenDiv--count">{orden.length}</p>
        <button
          className="container__header__ordenDiv--btnorden"
          onClick={() => viewOrden()}
        ></button>
      </div>
      <div className="container__header__ordenDiv--list">
        <button
          className="container__content__option--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {orden.length === 0  ? (
          <p>0</p>
        ) : (
          orden.map((plate) => (
            <Plate
              key={plate.id}
              plate={plate}
              orden={orden}
              setOrden={setOrden}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};


export default Orden;
