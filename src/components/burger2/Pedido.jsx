import React, { Fragment, useState } from "react";
import Orden from "./Orden";
import Plate from "./Plate";
import Data from "../../Data/Data.json";
import Table from "../Table"

const Pedido = (option) => {
  
  const dataFilter = Data.filter((plate) => plate.option === option.option);
  const dataPrice = Data.filter((plate) => plate.price === option.price);
  console.log("soy dataprice" + dataPrice);
  //estado del pedido  inicia vacio
  const [orden, setOrden] = useState([]);
  const [price, setPrice] = useState([]);

  return (
    <Fragment>
      <section className="container">
        <section className="container__header">
          <div className="container__header__title">
            {/* para darle el nombre al titulo segun la opción seleccionada */}
             <h3 className="container__header__title--text">{option.option}</h3>
          </div>
          <div className="container__header__ordenDiv">
            {/* le pasamos al componente Orden las propiedades necesarias */}
            <Orden orden={orden} setOrden={setOrden} />
          </div>
        </section>
        <section className="container__content">
          <div className="container__content__listOption">
            {/* filtramos la data de opciones y le pasamos los props a plate */}
            {dataFilter.map((plate) => (
              <Plate
                key={plate.id}
                plate={plate}
                orden={orden}
                setOrden={setOrden}
                plates={dataFilter}
              />
            
            ))}
            ;
          </div>
          <div className="container__header__ordenDiv">
            {/* le pasamos al componente table las propiedades necesarias */}
            {dataPrice.map((priceOrden) => (
            <Table 
            key={priceOrden.id}
                priceOrden={priceOrden}
                price={price}
                setPrice={setPrice}
                prices={dataPrice} />
               
                ))}
            ;
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Pedido;
