import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppUser from "./AppUser";
import images from "./asset/images";
import Pedido from "./components/burger2/Pedido";
import PedidoSh from "./components/Shawarma/pedidoSh";
import PedidoDrink from "./components/Drinks/PedidoDrink";

// import FormCrud from "./components/FormCrud"
import Table from "./components/Table";

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
        <Link className="btn btn-dark mr-3" to="/">
          INICIO
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="btn btn-dark mr-3" to="/burger">
          HAMBURGUESA
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="btn btn-dark mr-3" to="/shawarma">
          SHAWARMA
        </Link>
        &nbsp;&nbsp;
        <Link className="btn btn-dark mr-3" to="/drink">
          BEBIDA
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link className="btn btn-dark mr-3" to="/table">
          ORDEN
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Switch>
          <Route exact path="/">
            <AppUser />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
          <Route path="/burger">
            <Pedido />
          </Route>

          <Route path="/shawarma">
            <PedidoSh />
            {/* <FormCrud /> */}
          </Route>
          <Route path="/drink">
            <PedidoDrink />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
