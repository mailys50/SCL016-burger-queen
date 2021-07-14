import React, { Fragment } from "react";
// import {  Link } from "react-router-dom";
import Plate from "./Plate";
//  import Cart from "../Cart"
import "./orden.css";
const Orden = ({ orden, setOrden }) => {
  const viewCart = () => {
    
  //creando mudulo de caja flexible
   document.querySelector("div.container__header__ordenDiv--list" ).style.display = "none"?
    (document.querySelector("div.container__header__ordenDiv--list").style.display = "flex")
    : (document.querySelector( "div.container__header__ordenDiv--list").style.display = "none");
    
  };

  const closeDiv = () => {
    document.querySelector( "div.container__header__ordenDiv--list" ).style.display = "none";
  };

  return (
    <Fragment>
      <div className="container__header__ordenDiv">
        <p className="container__header__ordenDiv--count">{orden.length}</p>
        <button
          className="container__content__option--btnOrden"
          type="button"
          onClick={() => viewCart()}
        > ver Orden
          {/* <Link to={{
              pathname: "/Cart",
              state: { fromDashboard: true },
            }}
          >
            Ver Orden
          </Link> */}
        </button>
      </div>
      <div className="container__header__ordenDiv--list">
        <button
          className="container__content__option--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {orden.length === 0 ? (
          <p>0 </p>
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
