import React from "react";
const Cards = (props) =>{
    //extraemos todos los props con objetos destructurado
    const {image,title,text,valor} = props
return(
    <div className="card" style={{width:'25rem'}}>
        <img src={image} className='card-img-top img-thumbnail' alt='Burger sencilla'/>
 <div className='card-body'>
     <h5 className='card-title' >{title}</h5>
     <p className='card-text' >{text}</p>
     <p className='card-valor' >${valor}</p>
    

     
 </div>
    </div>

    
)
}
export default Cards;