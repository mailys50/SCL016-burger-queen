import React from "react";
import User from "./components/User";
import Clock from "./components/Clock"
import Mesa from "./components/Mesa";
import GarzonList from "./components/GarzonList";
// import '../App.css';



const AppUser = ()  =>{
    
  return (
    <div className="containerUser">
       <Clock />
     <User />
    
     <Mesa />
     <GarzonList />
    </div>
  );
}

export default AppUser;