import React from "react";
import Styles from "./Home.module.css";
// import Cars from "./Cars";
import { Link, Outlet } from "react-router-dom";
import AddCar from "../AddCar/AddCar";

export default function Home() {
  return (
    <div>
      <div className={Styles.header}>
        <div>
          <img src="/Logo.png" alt="" />
          <h1>Aventura Automotriz</h1>
        </div>
        <div>
          <Link to={"/home/ViewCars"}>Ver carros</Link>
          <Link to={"/home/AddCar"}>Agregar carro</Link>
        </div>
      </div>
      <div className={Styles.container}>
        <Outlet />
      </div>
    </div>
  );
}
