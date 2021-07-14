import React from "react";
export const Clock = props => {
    const [date, setDate] = React.useState(new Date());
  
   //Replace componente DidMount and componentWillUnmount
   React.useEffect(() => {
    var timerID = setInterval( () => tick(), 1000 );
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
     function tick() {
      setDate(new Date());
     }
  
     return (
        <div>
          <h2> {date.toLocaleTimeString()}.</h2>
        </div>
      );
  }
  export default Clock;
  // ReactDOM.render(
  //   <Clock />,
  //   document.getElementById('App')
  // );
