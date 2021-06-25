import React, { Fragment } from "react";
import BurgerButton from "./BurgerButton";
import ShawarmaButton from "./ShawarmaButton";
import ExtraButton from "./ExtraButton";
import DrinkButton from "./DrinkButton";
const Button = () => {
  return (
    <Fragment>
      <BurgerButton></BurgerButton>
      <ShawarmaButton></ShawarmaButton>
      <ExtraButton></ExtraButton>
      <DrinkButton></DrinkButton>
    </Fragment>
  );
};
export default Button;
