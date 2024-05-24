import React, { useEffect, useState } from "react";
import Styles from "./form-product.module.css";

const initialForm = {
  id: null,
  brand: "",
  model: "",
  fuel: "",
  power: "",
  release_year: "",
  color: "",
  photo: null,
};

export default function FormProduct({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(dataToEdit || initialForm);
  const [error, setError] = useState("");

  useEffect(() => {
    setForm(dataToEdit || initialForm);
  }, [dataToEdit]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === "release_year") {
      if (value.length > 4 || !/^\d*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleFileChange = ({ target: { files } }) => {
    setForm({ ...form, photo: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ["brand", "model", "fuel", "power", "color", "release_year"];
    const isMissingRequiredFields = requiredFields.some(field => !form[field]);

    if (isMissingRequiredFields) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      if (form.id === null) {
        await createData(form);
      } else {
        await updateData(form);
      }
      setForm(initialForm);
      setDataToEdit(null);
      setError("");
    } catch (error) {
      setError("Error al registrar los datos");
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className={Styles.form}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="brand"
          placeholder="Marca:"
          onChange={handleChange}
          value={form.brand}
        />
        <input
          type="text"
          name="model"
          placeholder="Modelo:"
          onChange={handleChange}
          value={form.model}
        />
        <select name="fuel" onChange={handleChange} value={form.fuel}>
          <option value="">-- Seleccione --</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Diesel">Diesel</option>
          <option value="Gas Natural Vehicular">Gas Natural Vehicular</option>
          <option value="Gas Licuado de Petróleo">
            Gas Licuado de Petróleo
          </option>
          <option value="Eléctrico">Eléctrico</option>
        </select>
        <input
          type="text"
          placeholder="Poder(Mh):"
          name="power"
          onChange={handleChange}
          value={form.power}
        />
        <input
          type="color"
          name="color"
          onChange={handleChange}
          value={form.color}
        />
        <input
          type="text"
          name="release_year"
          placeholder="Año:"
          onChange={handleChange}
          value={form.release_year}
        />
        <input type="file" name="photo" onChange={handleFileChange} />

        <input type="submit" value={dataToEdit ? "Actualizar" : "Registrar"} />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  );
}

