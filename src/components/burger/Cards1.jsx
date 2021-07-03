import React from "react";
const Cards1 = (props) =>{
    //extraemos todos los props con objetos destructurado
    const {images,name,text,price} = props
return(
    <div className="card" style={{width:'25rem'}}>
        <img src={images} className='card-img-top img-thumbnail' alt='Burger sencilla'/>
 <div className='card-body'>
     <h5 className='card-title' >{name}</h5>
     <p className='card-text' >{text}</p>
     <p className='card-price' >${price}</p> 

     
 </div>
    </div>

    
)
}
export default Cards1;