import React, { Fragment, useState } from "react";
import OrdenDrink from "./OrdenDrink";
import Drink from "./Drink";
import DataDrink from "../../Data/DataDrink.json";
// import '../App.css';

const PedidoDrink = () => {
  //estado de burguer

  const [[drinks]] = useState([DataDrink]);

  //estado del pedido inicia vacio
  const [orden, setOrden] = useState([]);
  return (
    <Fragment>
      <section className="container">
        <section className="container__header">
          <div className="container__header__menu">
            <button className="container__header__menu--button"></button>
          </div>
          <div className="container__header__title">
            <h3 className="container__header__title--text">BEBIDAS</h3>
          </div>
          <div className="container__header__optionDiv">
            <OrdenDrink orden={orden} setOrden={setOrden} />
          </div>
        </section>
        <section className="container__content">
          <div className="container__content__listOption">
            {DataDrink.map((drink) => (
              <Drink
                key={drink.id}
                drink={drink}
                orden={orden}
                setOrden={setOrden}
                drinks={drinks}
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

export default PedidoDrink;
