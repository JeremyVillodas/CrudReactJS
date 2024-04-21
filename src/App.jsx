import { useState } from 'react'
import styles from './app.module.css'
import Header from './components/Header/Header.jsx'
import Form from './components/FormProduct/formProduct.jsx'
import TableProducts from './components/TableProducts/tableProducts.jsx'

const initialDb = []
export default function App() {
  
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    const newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    const newData = db.filter(el => el.id !== id);
    setDb(newData);
  };

  return (
    <>
    <Header />
    <div className={styles.container}>
    <Form 
    createData={createData}
    updateData={updateData} 
    dataToEdit={dataToEdit} 
    setDataToEdit={setDataToEdit} />
    <TableProducts 
    data={db}
    setDataToEdit={setDataToEdit}
    deleteData={deleteData}
    />
    </div>
    </>
  )
}



