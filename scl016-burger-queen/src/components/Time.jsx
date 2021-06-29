import React, { Fragment } from "react";
import ReactDOM from 'react-dom'

const Time = () => {
  const updateTime = () => {
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const hour =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const time = date + "     " + hour;
  return time;
  //  return date;
  }
  // const intervale=()=>{
  
  //   const element = (
  //     <div className='box-reloj'>
  //       <h1> {new Date().toLocaleTimeString()}</h1>
  //     </div>
  //   );
    
  //   ReactDOM.render(
  //   element , document.getElementById('root')
  // );
  // }
  
  // setInterval(intervale, 1000);
 
  return (
    <Fragment className="Time">
      
      <h2>{updateTime}</h2>
      {/* <h2>{intervale}</h2> */}
  
    </Fragment>
  );
};


export default Time;
