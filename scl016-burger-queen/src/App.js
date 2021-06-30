import React from "react";
import {BrowserRouter as Router,
Switch,
 Route, Links} from 'react-router-dom'
import Time from './components/Time';
import Mesa from './components/Mesa';
import GarzonList from './components/GarzonList'

import Cards from "./components/Cards";
import AppUser from './AppUser'
import images from './asset/images'
import App1 from "./App1";
import App2 from "./App2";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inicio">
estas en inicio

        </Route>
        <Route path="/">
estas es la url base

        </Route>
        <Route path="/inicio">
estas en inicio

        </Route>
        <Route path="/">
estas es la url base

        </Route>


      </Switch>
    <div className="App">
      <img src={images.img1} alt= 'logo'/>
      
      
      <AppUser/>
      <Time/> 
      <Mesa/>  
      <GarzonList/>
      <Cards/>
      <App1/>
      <App2/>
       
      
    </div>
    </Router>
  );
}

export default App;
