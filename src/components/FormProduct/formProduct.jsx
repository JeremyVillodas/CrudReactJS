import React, { useEffect,useState } from 'react'
import Styles from './form-product.module.css'
import Fields from './formFields.jsx'

const initialForm = {
  id : null,
  name: "",
  description: "",
  stock: "",
}

export default function formProduct({createData, updateData, dataToEdit, setDataToEdit}) {

  
  const [form, setform] = useState(initialForm)
  

  useEffect(() => {
    if(dataToEdit){
      setform(dataToEdit);
    }else{
      setform(initialForm);
    }
  }, [dataToEdit])

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.name || !form.description || !form.stock){
      alert('Todos los campos son obligatorios')
      return
    }

    {form.id === null ? createData(form) : updateData(form)}

    handleReset();
  }

  const handleReset = (e) => {
    
    setform(initialForm);
    setDataToEdit(null);
      
  }
  
  return (
    <>
      <div className={Styles.form}>
      <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name = 'name' 
            placeholder='Nombre:' 
            onChange={handleChange} 
            value={form.name}
            />
            <textarea 
            placeholder='Descripción:' 
            name = 'description' 
            onChange={handleChange} 
            value={form.description}></textarea>
            <input 
            type="number" 
            placeholder='Stock:' 
            name = 'stock' 
            onChange={handleChange}
            value={form.stock}/>
            <input 
            type="submit" 
            value={dataToEdit ? "Actualizar" : "Registrar"}
            />
            <input 
            type="reset" 
            value="Limpiar"
            onClick={handleReset}
            />
        </form>
      </div>
    </>
  )
}
