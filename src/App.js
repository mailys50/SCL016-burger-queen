import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "./components/opction/Cards";
import AppUser from "./AppUser";
import images from "./asset/images";
import Pedido from "./components/burger2/Pedido";
import PedidoSh from "./components/Shawarma/pedidoSh";
import AppBurger from "./components/burger/AppBurger";
// import FormCrud from "./components/FormCrud"
// import Table from "./components/Table";
import UseDatos from"./components/burger/UseDatos";
import "./App.css";

//crea un valor que se va a guardar Para ser utilizado
// const myContext = React.createContext();

function App() {
  return (
    <div className="App">
       <div>
              <img src={images.img1} alt="logo" />
              
            </div>
            <AppUser />
            
      <Router>
        <Link to="/">AppUser</Link>
        <Link to="/inicio">Inicio</Link>
        <Link to="/burger">Burger</Link>
        <Link to="/burger1">Burger1</Link>
        <Link to="/shawarma">Shawarma</Link>
        <Link to="/drink">Drink</Link>

        <Link to="/table">Table</Link>
        <Switch>
          <Route exact path="/">
      
          <Cards />
          
          </Route>
          <Route path="/inicio">

            
          </Route>
          <Route path="/table">
          
          < UseDatos/>
          </Route>
          <Route path="/burger">
            <Pedido />
            
          </Route>
          <Route path="/burger1">
           
            <AppBurger />
          </Route>
          <Route path="/shawarma">
           
          <PedidoSh />
        {/* <FormCrud /> */}
          </Route>
          <Route path="/drink">
        
          <AppUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
