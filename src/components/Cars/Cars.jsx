import React, { useEffect, useState } from "react";
import Styles from "./Cars.module.css";
import CarModal from "../CarModal/CarsModal";
import helpHttp from "../../helpers/helpHttp";
import Loader from "../Loader/Loader";

export default function Cars({ data, setDataToEdit, deleteData }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [db, setDb] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let api = helpHttp();
  let url = "http://26.101.183.188:8000/api/vehicle/allVehicle";

  useEffect(() => {
    setLoading(true);
    api
      .get(url)
      .then((res) => {
        setLoading(false);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb([]);
          setError(res);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return (
    <div className={Styles.containerCars}>
      {loading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {db &&
        db.length > 0 &&
        db.map((el) => (
          <div
            className={Styles.cars}
            onClick={() => setSelectedCar(el)}
            key={el.id}
          >
            <img src="/carrito.jpg" alt="" />
            <h1>{el.brand}</h1>
            <p>{el.model}</p>
          </div>
        ))}
      <CarModal
        el={selectedCar}
        onClose={() => setSelectedCar(null)}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
}
