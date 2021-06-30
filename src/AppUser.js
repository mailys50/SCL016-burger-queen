import React from "react";
import User from "./components/User";
import Time from "./components/Time";
import Mesa from "./components/Mesa";
import GarzonList from "./components/GarzonList";
// import '../App.css';



const AppUser = ()  =>{
    
  return (
    <div className="containerUser">
     <User />
     <Time />
     <Mesa />
     <GarzonList />
    </div>
  );
}

export default AppUser;