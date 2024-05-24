import React, { useEffect, useState } from "react";
import styles from "./crud-api.module.css";
import Form from "../FormProduct/formProduct.jsx";
import { helpHttp } from "../../helpers/helpHttp.jsx";

export default function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let api = helpHttp();
  let url = "http://26.101.183.188:8000/api/vehicle/allVehicle";
  let urlPost = "http://26.101.183.188:8000/api/vehicle/insertVehicle";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      setLoading(false);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
    }).catch(error => {
      setLoading(false);
      setError(error);
    });
  }, [url]);

  const createData = (data) => {
    let options = {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    api.post(urlPost, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
        setError(null);
      } else {
        setError(res);
      }
    }).catch(error => {
      setError(error);
    });
  };

  const updateData = (data) => {
    let endpoint = `http://26.101.183.188:8000/api/vehicle/updateVehicle/${data.id}`;
    let options = {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    api.patch(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setError(null);
      } else {
        setError(res);
      }
    }).catch(error => {
      setError(error);
    });
  };

  const deleteData = (id) => {
    let endpoint = `http://26.101.183.188:8000/api/vehicle/deleteVehicle/${id}`;
    let options = {
      headers: { "Content-Type": "application/json" },
    };
    api.del(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
        setError(null);
      } else {
        setError(res);
      }
    }).catch(error => {
      setError(error);
    });
  };

  return (
    <>
      <div className={styles.container}>
        <Form
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </>
  );
}
