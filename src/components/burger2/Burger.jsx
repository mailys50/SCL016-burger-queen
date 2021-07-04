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
    console.log(burgers);
  };
  // const delBurger = (id) => {
  //   const burgers = orden.filter((burger) => burger.id !== id);
  //   setOrden(burgers);
  // };
  // const confBurger = (id) => {
  //   const burgers = orden.filter((burger) => burger.id !== id);
  //   setOrden(burgers);
  //   alert("enviado a preparación");
  // };


  return (
    <Fragment>

    <ul className="container__content__option">
      <img className="container__content__option--image" src={images} width="50px" height="50px" alt= 'imagen'/>
     
      <li className="container__content__option--name" bg-primary="true">{name}</li>
      <li className="container__content__option--text">{text} </li>
      <li className="container__content__option--price">${price}</li>
    
     
    
        <button
          className="container__content__option--btnAdd"
          type="button"
          onClick={() => addBurger(id)}
        >
          Agregar 
        </button>
      
      
    </ul>
    </Fragment>
  );
};


export default Burger;