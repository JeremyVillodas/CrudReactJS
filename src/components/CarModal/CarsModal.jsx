import React from "react";
import Styles from "./CarsModal.module.css";
import { Link } from "react-router-dom";

export default function CarModal({ el, setDataToEdit, deleteData, onClose }) {
  if (!el) return null;

  const { id, brand, model, release_year, power, color,fuels } = el;


  return (
    <div className={Styles.overlay} onClick={onClose}>
      <div className={Styles.modal}>
        <img src="/carrito.jpg" alt="" />
        <h1>Marca: {brand}</h1>
        <p>Modelo: {model}</p>
        <p>Año: {release_year}</p>
        <p>Potencia: {power} HP</p>
        <p>
          Color: <input type="color" value={color} readOnly />
        </p>
        <p>Tipo: {fuels.name}</p>
        <div className={Styles.btns}>
          <Link
            to={`/home/EditCar`}
            onClick={() => setDataToEdit(el)}
            className={Styles.btn_edit}
          >
            Editar
          </Link>
          <button onClick={() => deleteData(id)}>Eliminar</button>
          <button onClick={onClose} className={Styles.btn_close}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
