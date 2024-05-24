import React from "react";
// import Form from "../../components/Form/Form";
import Styles from "./AddCar.module.css";
import FormProduct from "../../components/FormProduct/formProduct";
import CrudApi from "../../components/CrudApi/CrudApi";

export default function AddCar() {
  return (
    <div className={Styles.addCarForm}>
      <h2>Agregar Nuevo Carro</h2>
      <CrudApi />
    </div>
  );
}
