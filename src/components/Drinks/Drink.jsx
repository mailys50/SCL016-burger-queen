import React,{Fragment} from "react";
import "../burger2/orden.css"
// import images from '../asset/images'

// a la const drink les pasamos las prop que declaramos en el componente pedido (drink, orden, setOrden, drinkss)
const Drink = ({ drink, orden, setOrden, drinks }) => {
// al colocar  { id, images, name, text, price } dentro de barger para llamarlo no es necesario colocar drink.nombre ya colocamos nombre solamente
 const { id, images, name, text, price } = drink;
  const addDrink = (id) => {
    const drink = drinks.filter((drink) => drink.id === id);
    setOrden([...orden, ...drink]);
    console.log(drinks);
  };
  // const deldrink = (id) => {
  //   const drinks = orden.filter((drink) => drink.id !== id);
  //   setOrden(drinks);
  // };
  // const confdrink = (id) => {
  //   const drinks = orden.filter((drink) => drink.id !== id);
  //   setOrden(drinks);
  //   alert("enviado a preparación");
  // };


  return (
    <Fragment>

    <ul className="container__content__drinks">
      <img className="container__content__drinks--image" src={images} width="50px" height="50px" alt= 'imagen'/>
     
      <li className="container__content__drinks--name" bg-primary="true">{name}</li>
      <li className="container__content__drinks--text">{text} </li>
      <li className="container__content__drinks--price">${price}</li>
    
     
    
        <button
          className="container__content__drinks--btnAdd"
          type="button"
          onClick={() => addDrink(id)}
        >
          Agregar 
        </button>
      
      
    </ul>
    </Fragment>
  );
};


export default Drink;