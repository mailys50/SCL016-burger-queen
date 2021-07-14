import React, { Fragment } from "react";
import Table from "../Table";
import "./orden.css";
// import images from '../asset/images'

// a la const burger les pasamos las prop que declaramos en el componente pedido (burger, orden, setOrden, burgerss)
const Plate = ({ plate, orden, setOrden, plates }) => {
  // al colocar  { id, images, name, text, price } dentro de plate para llamarlo no es necesario colocar burger.nombre ya colocamos nombre solamente
  const { id, images, name, text, price } = plate;

  const addPlate = (id) => {
    const dataPlate = plates.filter((plateAg) => plateAg.id === id);

    setOrden([...orden, ...dataPlate]);

    <Table plates={dataPlate} />;

    // console.log(orden.length);
  };

  const deleteOption = (id) => {
    const options = orden.filter((plateOption) => plateOption.id !== id);
    setOrden(options);
  };

  return (
    <Fragment>
      <ul className="container__content__option">
        <img
          className="container__content__option--image"
          src={images}
          width="50px"
          height="50px"
          alt="imagen"
        />

        <li className="container__content__option--nombre">{name}</li>
        <li className="container__content__option--text">{text}</li>
        <li className="container__content__option--precio">${price}</li>
        {plates ? (
          <button
            className="container__content__option--btnAdd"
            type="button"
            onClick={() => addPlate(id)}
          >
            Agregar
          </button>
        ) : (
          <div>
            <button
              className="container__content__burgers--btnDel"
              type="button"
              onClick={() => deleteOption(id)}
            >
              Eliminar
            </button>
            <button
              className="container__content__burgers--btnAdd"
              type="button"
              onClick={() => deleteOption(id)}
            >
              Confirmar
            </button>
          </div>
        )}
      </ul>
    </Fragment>
  );
}

export default Plate;
