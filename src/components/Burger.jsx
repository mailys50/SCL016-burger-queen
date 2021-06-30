import React from "react";
import "./burger.css"
// import images from '../asset/images'


const Burger = ({ burger, orden, setOrden, burgers }) => {
  const { nombre, images, precio, id } = burger;
  const addBurger = (id) => {
    const burger = burgers.filter((burger) => burger.id === id);
    setOrden([...orden, ...burger]);
    console.log(orden.length);
  };
  const delBurger = (id) => {
    const burgers = orden.filter((burger) => burger.id !== id);
    setOrden(burgers);
  };

  return (
    <ul className="container__content__burgers">
      <img className="container__content__burgers--image" src={images} alt= 'logo'/>
     
      <li className="container__content__burgers--nombre">{nombre}</li>
      <li className="container__content__burgers--precio">${precio}</li>
      {burgers ? (
        <button
          className="container__content__burgers--btnAdd"
          type="button"
          onClick={() => addBurger(id)}
        >
          Agregar +
        </button>
      ) : (
        <div>
          <button
            className="container__content__burgers--btnDel"
            type="button"
            onClick={() => delBurger(id)}
          >
            Eliminar
          </button>
          <button
            className="container__content__burgers--btnAdd"
            type="button"
            onClick={() => delBurger(id)}
          >
            Confirmar
          </button>
        </div>
      )}
    </ul>
  );
};

export default Burger;