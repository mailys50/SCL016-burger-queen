 import React, { Fragment } from "react";
// // import ReactDOM from 'react-dom'


const Time = () => {
  const updateTime = () => {
    const today = new Date();
    let day= today.getDate();
    let month= today.getMonth();
    let year = today.getFullYear();
    let hours =today.getHours();
    let minutes =today.getMinutes();
    let seconds= today.getSeconds();
    const date = day + "/" + (month + 1) + "/" + year;
    
    
    if (minutes < 10) {
      minutes = "0"+ minutes;
    }
    if (seconds < 10) {
      seconds = "0"+ seconds;
    }
    document.getElementById('hora').innerHTML = date + "     " + hours + ":" + minutes + ":" + seconds;
  }
  
  setInterval(updateTime, 1000);
  
  
 
  return (
    <Fragment className="Time">
      
      <h2 id="hora"></h2>
      
  
    </Fragment>
  );
};


export default Time;
