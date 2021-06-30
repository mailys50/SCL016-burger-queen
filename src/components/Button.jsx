import React, { Fragment } from "react"
import ShawarmaButton from "./ShawarmaButton";
import ExtraButton from "./ExtraButton";
import DrinkButton from "./DrinkButton";
const Button = () => {
  return (
    <Fragment>
  
      <ShawarmaButton></ShawarmaButton>
      <ExtraButton></ExtraButton>
      <DrinkButton></DrinkButton>
    </Fragment>
  );
};
export default Button;
