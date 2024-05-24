import React from "react";
import Styles from "./EditCar.module.css";
import FormProduct from "../../components/FormProduct/formProduct";
import CrudApi from "../../components/CrudApi/CrudApi";
// import Form from "./Form/Form";

export default function EditCar() {
  return (
    <div className={Styles.addCarForm}>
      <h2>Editar Carro</h2>
      <CrudApi/>
    </div>
  );
}
