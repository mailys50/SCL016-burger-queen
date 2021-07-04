import React,{Fragment} from "react";
import "../burger2/orden.css"
// import images from '../asset/images'

// a la const shawarma les pasamos las prop que declaramos en el componente pedido (shawarma, orden, setOrden, shawarmass)
const Shawarma = ({ shawarma, orden, setOrden, shawarmas }) => {
// al colocar  { id, images, name, text, price } dentro de barger para llamarlo no es necesario colocar shawarma.nombre ya colocamos nombre solamente
  const { id, images, name, text, price } = shawarma;
  const addShawarma = (id) => {
    const shawarma = shawarmas.filter((shawarma) => shawarma.id === id);
    setOrden([...orden, ...shawarma]);
    console.log(orden.length);
  };
  const delShawarma = (id) => {
    const shawarmas = orden.filter((shawarma) => shawarma.id !== id);
    setOrden(shawarmas);
  };
  console.log("soy shawarmas" + id );

  return (
    <Fragment className="App">

    <ul className="container__content__option">
      <img className="container__content__option--image" src={images} width="50px" height="50px" alt= 'imagen'/>
     
      <li className="container__content__option--nombre">{name}</li>
      <li className="container__content__option--nombre">{text} color:orange</li>
      <li className="container__content__option--precio">${price}</li>
    
     
      {shawarmas ? (
        <button
          className="container__content__option--btnAdd"
          type="button"
          onClick={() => addShawarma(id)}
        >
          Agregar +
        </button>
      ) : (
        <div>
          <button
            className="container__content__shawarmas--btnDel"
            type="button"
            onClick={() => delShawarma(id)}
          >
            Eliminar
          </button>
          <button
            className="container__contesnt__option--btnAdd"
            type="button"
            onClick={() => delShawarma(id)}
          >
            Confirmar
          </button>
        </div>
      )}
    </ul>
    </Fragment>
  );
};


export default Shawarma;