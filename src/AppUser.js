import React from "react";
import User from "./components/User";
import Clock from "./components/Clock"

// import '../App.css';



const AppUser = ()  =>{
    
  return (
    <div className="containerUser">
       <Clock />
       <User />
    </div>
  );
}

export default AppUser;