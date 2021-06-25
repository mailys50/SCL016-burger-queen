import React, { Fragment } from "react";

const Time = () => {
  const today = new Date();
  const date =
    today.getDate() + "/" + (today.getMonth() + 3) + "/" + today.getFullYear();
  const hour =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const time = date + "     " + hour;
  return (
    <Fragment className="Time">
      <h2>{time}</h2>
    </Fragment>
  );
};

export default Time;
