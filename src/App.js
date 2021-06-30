import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "./components/Cards";
import AppUser from "./AppUser";
import images from "./asset/images";
import Pedido from "./components/Pedido";
import AppBurger from "./AppBurger";
import "./App.css";
//crea un valor que se va a guardar Para ser utilizado
// const myContext = React.createContext();

function App() {
  return (
    <div className="App">
       <div>
              <img src={images.img1} alt="logo" />
            </div>
      <Router>
        <Link to="/">AppUser</Link>
        <Link to="/inicio">Inicio</Link>
        <Link to="/burger">Burger</Link>
        <Link to="/shawarma">Shawarma</Link>
        <Link to="/drink">Drink</Link>

        <Switch>
          <Route exact path="/">
          <AppUser />
          
          </Route>
          <Route path="/inicio">
            <Cards />
          </Route>
          <Route path="/burger">
            <Pedido />
            <AppBurger />
          </Route>
          <Route path="/shawarma">
          <Pedido />
            <AppBurger />
          </Route>
          <Route path="/drink">
          <Pedido />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
