import CrudTableRow from './CrudTableRow'
import styles from './table-products.module.css'
import React from 'react'

export default function tableProducts({data, setDataToEdit, deleteData}) {

    return (
        <>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                        <tr><td colSpan="5">SIN DATOS</td></tr>
                        ) : (
                            data.map(el => 
                              <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
                          ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
