import React from "react";
import Cards1 from "./components/Cards1"

import './App.css';


const App2 = () => {

  return (
      <div>
          <h1>Burger</h1>
          <hr/>
          <div className="row">
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER"
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
              imagen="https://lorempixel.com/150/150"
              title= "BURGER"
              text= "lechuga,tomate, salsa"
              />
          </div> 

          </div>
      </div>
   
  );
}

export default App2;