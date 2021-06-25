import React from "react";
import Time from './components/Time';
import Mesa from './components/Mesa';
import GarzonList from './components/GarzonList'
import Button from './components/Button';
import images from './asset/images'
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={images.img1} alt= 'logo'/>
      

      <Time></Time> 
      <Mesa></Mesa>  
      <GarzonList> </GarzonList>
      <Button></Button>
      
      
    </div>
  );
}

export default App;
