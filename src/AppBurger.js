import React from "react";
import Cards1 from "./components/Cards1"


// import '../App.css';


const AppBurger = () => {

  return (
      <div>
          <h1>Burger</h1>
          <hr/>
          <div className="row">
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER CARNE"
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
              imagen="SCL016-hamburguesa-queen/scl016-hamburguesa-queen/src/activo/img/ HdobleP.png"
              title= "BURGER DOBLE CARNE"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER CARNE Y TOCINO"
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER CARNE POLLO"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER  POLLO"
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER DOBLE POLLO"
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER POLLO Y TOCINO"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          
          </div>
      </div>
   
  );
}

export default AppBurger;