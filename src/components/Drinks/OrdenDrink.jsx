import React, { Fragment } from "react";
import Drink from "./Drink";
import "../burger2/orden.css"
const OrdenDrink = ({orden,setOrden}) => {
// return (
//     <div className= "orden">
//     <h3>Orden</h3>
//     {orden.length ?(<p>0</p>): (orden.map((drink => <drink key={drink.id}drink={drink.name}orden={orden} setOrden={setOrden}/> )))}
//     {orden.length === 1 ?(<p>1</p>): (orden.map((drink => <drink key={drink.name}drink={drink} orden={orden} setOrden={setOrden}/> )))}
//     </div>
// )
const viewOrden = () => {
    
      document.querySelector("div.container__header__optionDiv--list").style.display = "none"? 
      (document.querySelector("div.container__header__optionDiv--list").style.display = "flex")
        : (document.querySelector("div.container__header__optionDiv--list").style.display = "none")
    
  };

  const closeDiv = () => {
    document.querySelector(
      "div.container__header__optionDiv--list"
    ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="container__header__optionDiv">
        <p className="container__header__optionDiv--count">{orden.length}</p>
        <button
          className="container__header__optionDiv--btnoption"
          onClick={() => viewOrden()}
        ></button>
      </div>
      <div className="container__header__optionDiv--list">
        <button
          className="container__content__drinks--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {orden.length === 0 ? (
          <p>0</p>
        ) : (
          orden.map((drink) => (
            <Drink
              key={drink.id}
              drink={drink}
              orden={orden}
              setOrden={setOrden}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};


export default OrdenDrink;
