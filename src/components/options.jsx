import React from 'react'

function options({ option, orden, setOrden, options }) {
    const { nombre, images, precio, id } = option;
  const addOption = (id) => {
    const option = options.filter((option) => option.id === id);
    setOrden([...orden, ...option]);
    console.log(orden.length);
  };
  const delOption = (id) => {
    const options = orden.filter((option) => option.id !== id);
    setOrden(options);
  };
    return (
        <ul className="container__content__options">
        <img className="container__content__options--image" src={images} alt= 'logo'/>
       
        <li className="container__content__options--nombre">{nombre}</li>
        <li className="container__content__options--precio">${precio}</li>
        {options ? (
          <button
            className="container__content__options--btnAdd"
            type="button"
            onClick={() => addOption(id)}
          >
            Agregar +
          </button>
        ) : (
          <div>
            <button
              className="container__content__options--btnDel"
              type="button"
              onClick={() => delOption(id)}
            >
              Eliminar
            </button>
            <button
              className="container__content__options--btnAdd"
              type="button"
              onClick={() => delOption(id)}
            >
              Confirmar
            </button>
          </div>
        )}
      </ul>
    );
    
}

export default options
