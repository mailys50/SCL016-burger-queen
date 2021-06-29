import React from "react";
// import {BroweserRouter as Router,
// Swithc,
// Route, Links} from 'react-router-dom'
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
  );
}

export default App;
