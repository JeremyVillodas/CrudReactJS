import React from "react";
import Styles from "./Welcome.module.css";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <div className={Styles.container}>
      <div className={Styles.banner}>
        <img src="/Logo.png" alt="" />
        <h1>Aventura <br />Automotriz </h1>
      </div>
      <div className={Styles.btns}>
        <Link to={"/home/ViewCars"} className={Styles.btn_entry}> Acceder </Link>
      </div>
    </div>
  );
}
