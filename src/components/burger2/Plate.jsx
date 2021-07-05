import React, { Fragment } from "react";
import "./orden.css";
// import images from '../asset/images'

// a la const burger les pasamos las prop que declaramos en el componente pedido (burger, orden, setOrden, burgerss)
function Plate({ plate, orden, setOrden, plates}) {
 
  // al colocar  { id, images, name, text, price } dentro de barger para llamarlo no es necesario colocar burger.nombre ya colocamos nombre solamente
  const { id, images, name, text, price } = plate;
  const addPlate = (id) => {

    const plate1 = plates.filter((plate2) => plate2.id === id);
    setOrden([...orden, ...plate1]);
    // console.log(burgers);
  };

  return (
    <Fragment>
      <ul className="container__content__option">
        <img
          className="container__content__option--image"
          src={images}
          width="50px"
          height="50px"
          alt="imagen" />

        <li className="container__content__option--nombre">{name}</li>
        <li className="container__content__option--text">{text}</li>
        <li className="container__content__option--precio">${price}</li>

        <button
          className="container__content__option--btnAdd"
          type="button"
          onClick={() => addPlate(id)}
        >
          Agregar
        </button>
      </ul>
    </Fragment>
  );
}

export default Plate;
