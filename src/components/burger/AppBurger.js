import React from "react";
import Cards1 from "./Cards1"


// import '../App.css';


const AppBurger = () => {

  return (
      <div>
          <h1>Burger</h1>
          <hr/>
          <div className="row">
          <div className="col">
              <Cards1
              id= "1"
              option= "burger"
              name= "CARNE"  
              price= "2500"
              images= "https://ibb.co/Sryq0kN"
              url="burger-carne"
              
              />
          </div>
          <div className="col">
              <Cards1
              id= "2"
              option= "burger"
              name= "DOBLE CARNE"
              price= "3500"
              images= "https=//ibb.co/QXvrdnv"
              url= "burger-doble-carne"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          
          <div className="col">
              <Cards1
             id= "3"
             option= "burger"
             name= "CARNE Y TOCINO"
             price= "3000"
             images= "https=//github.com/mailys50/SCL016-burger-queen/blob/develop4/src/asset/img/burger.png?raw=true"
             url= "burger-carne-tocino"
             
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
             id= "4"
             option= "burger"
             name= "CARNE Y POLLO"
             price= "3500"
             images= "https=//github.com/mailys50/SCL016-burger-queen/blob/develop4/src/asset/img/burgerMaxi.png?raw=true"
             url= "burger-carne-pollo"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          <div className="col">
              <Cards1
              id= "5"
              option= "burger"
              name= "POLLO"
              price= "2500"
              images= "https=//ibb.co/fM1bxnL"
              url= "burger-carne-pollo"
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
              id= "6"
              option= "burger"
              name= "DOBLE POLLO"
              price= "3500"
              images= "https=//ibb.co/QvSPFTN"
              url= "burger-doble-pollo"
              
              text= "lechuga,tomate, salsa"
              />
          </div>
          <div className="col">
              <Cards1
               id= "7"        
               option= "burger"
               name= "MAXI"
               price= "4000"
               images= "https=//ibb.co/fQS6208"
               url= "burger-pollo-tocino"
              text= "lechuga,tomate, salsa"
              />
          </div> 
          
          </div>
      </div>
   
  );
}

export default AppBurger;