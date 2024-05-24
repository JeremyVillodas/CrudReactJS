import React from "react";
import Cars from "../../components/Cars/Cars";
import Styles from "./ViewCars.module.css";

export default function ViewCars() {
  return (
    <div className={Styles.containerViewCars}>
      <Cars />
    </div>
  );
}
