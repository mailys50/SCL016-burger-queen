import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clock from "./components/Clock"
import User from "./components/User"
import Cart from "./components/Cart"
import Pedido from "./components/burger2/Pedido";
import Table from "./components/Table"


// import FormCrud from "./components/FormCrud"
// import Table from "./components/Table";

import "./App.css";

//crea un valor que se va a guardar Para ser utilizado
// const myContext = React.createContext();

function App() {
  return (
    <div className="App">
      <div>
        <img src="https://github.com/mailys50/SCL016-burger-queen/blob/develop4/src/asset/img/logo.png?raw=true" alt="logo" />
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
        <Link className="btn btn-dark mr-3" to="/Orden">
          ORDEN
        </Link>
      
      
        <Switch>
          <Route exact path="/">
          <Clock />
          <User />
          </Route>

          <Route path="/burger">
            <Pedido option="HAMBURGUESA" />
          </Route>

          <Route path="/shawarma">
            <Pedido option="SHAWARMA" />
          </Route>
          <Route path="/drink">
            <Pedido option="BEBIDA" />
          </Route>
          <Route path="/Cart" >
         <Cart  />
          </Route>
          <Route path="/Orden" >
         <Table  />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
