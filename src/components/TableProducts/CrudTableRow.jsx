import React from 'react'

export default function CrudTableRow({el, setDataToEdit, deleteData}) {

  let {name, description, stock,id} = el;

  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{stock}</td>
        <td>
            <button onClick={() => setDataToEdit(el)}>Editar</button>
            <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
    </tr>
  );
};
