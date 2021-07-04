import React from "react";
import Card from "./Card";
import images from "../../asset/images";




const cards = [
  {
    id: 1,
    title: "BURGER",
    image: images.img2,
    
    
  },
  {
    id: 2,
    title: "SHAWARMA",
    image: images.img3,
    
  },
  {
    id: 3,
    title: "DRINK",
    image: images.img4,
    
  },
];


const Cards = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 " style={{width:'30rem', height:'30rem'}}>
      <div className="row">
        {cards.map(({ title, image, id }) => (

          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title}  />

          </div>
         
        ))}
      </div>
    </div>
  );
}

export default Cards;