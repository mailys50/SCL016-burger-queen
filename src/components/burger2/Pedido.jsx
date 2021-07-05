import React, { Fragment, useState } from "react";
import Orden from "./Orden";
import Plate from "./Plate";
import Data from "../../Data/Data.json";
// import '../App.css';

const Pedido = (option) => {
  //estado de burguer

  const dataFilter = Data.filter((plate) => plate.option === option.option);
  //estado del pedido inicia vacio
  const [orden, setOrden] = useState([]);
  return (
    <Fragment>
      <section className="container">
        <section className="container__header">
          {/* <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div> */}
          <div className="container__header__title">
            <h3 className="container__header__title--text">HAMBURGESAS</h3>
          </div>
          <div className="container__header__ordenDiv">
            <Orden orden={orden} setOrden={setOrden} />
          </div>
        </section>
        <section className="container__content">
          <div className="container__content__listOption">
            {dataFilter.map((plate) => (
              <Plate
                key={plate.id}
                plate={plate}
                orden={orden}
                setOrden={setOrden}
                plates={dataFilter}
              />
            ))}
            {/* <Orden orden={orden}
     setOrden={setOrden}/> */}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Pedido;
