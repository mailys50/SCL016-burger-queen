import React, { Fragment } from "react";
import Shawarma from "./Shawarma";
import "../burger2/orden.css"
const OrdenSh = ({orden,setOrden}) => {
// return (
//     <div className= "orden">
//     <h3>Orden</h3>
//     {orden.length ?(<p>0</p>): (orden.map((shawarma => <shawarma key={shawarma.id}shawarma={shawarma.name}orden={orden} setOrden={setOrden}/> )))}
//     {orden.length === 1 ?(<p>1</p>): (orden.map((shawarma => <shawarma key={shawarma.name}shawarma={shawarma} orden={orden} setOrden={setOrden}/> )))}
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
          className="container__content__shawarmas--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {orden.length === 0 ? (
          <p>0</p>
        ) : (
          orden.map((shawarma) => (
            <Shawarma
              key={shawarma.id}
              shawarma={shawarma}
              orden={orden}
              setOrden={setOrden}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};


export default OrdenSh;
