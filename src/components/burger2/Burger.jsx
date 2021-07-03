import React,{Fragment} from "react";
import "./orden.css"
// import images from '../asset/images'

// a la const burger les pasamos las prop que declaramos en el componente pedido (burger, orden, setOrden, burgerss)
const Burger = ({ burger, orden, setOrden, burgers }) => {
// al colocar  { id, images, name, text, price } dentro de barger para llamarlo no es necesario colocar burger.nombre ya colocamos nombre solamente
  const { id, images, name, text, price } = burger;
  const addBurger = (id) => {
    const burger = burgers.filter((burger) => burger.id === id);
    setOrden([...orden, ...burger]);
    console.log(orden.length);
  };
  const delBurger = (id) => {
    const burgers = orden.filter((burger) => burger.id !== id);
    setOrden(burgers);
  };
  const confBurger = (id) => {
    const burgers = orden.filter((burger) => burger.id !== id);
    setOrden(burgers);
    alert("enviado a preparación");
  };


  return (
    <Fragment className="App">

    <ul className="container__content__burgers">
      <img className="container__content__burgers--image" src={images} width="50px" height="50px" alt= 'imagen'/>
     
      <li className="container__content__burgers--name" bg-primary>{name}</li>
      <li className="container__content__burgers--text">{text} </li>
      <li className="container__content__burgers--price">${price}</li>
    
     
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
            className="container__contesnt__burgers--btnAdd"
            type="button"
            onClick={() => confBurger(id)}
          >
            Confirmar
          </button>
        </div>
      )}
    </ul>
    </Fragment>
  );
};


export default Burger;