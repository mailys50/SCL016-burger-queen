import React from "react";
import {BrowserRouter as Router,
Switch,
 Route, Links} from 'react-router-dom'
import Time from './components/Time';
import Mesa from './components/Mesa';
import GarzonList from './components/GarzonList'
import Cards from "./components/Cards";
import User from './components/User'
import images from './asset/images'
import App1 from "./App1";
import App2 from "./App2";
import './App.css';
//crea un valor que se va a guardar oara ser utilizado
// const myContext = React.createContext();

function App() {
  return (
    // <myContext.Provider value={null} >
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
          <img src={images.img1} alt= 'logo'/>
          </div>
          <User />
          <Time/> 
          <Mesa/>  
         <GarzonList/>
         <Cards/>

        </Route>
        <Route  path="/inicio">
          
          <App1/>
           <App2/>
        </Route>
      </Switch>   
    </Router>
  );
}

export default App;
