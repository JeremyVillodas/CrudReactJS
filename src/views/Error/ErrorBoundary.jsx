import React from 'react'
import Styles from './ErrorBoundary.module.css'
import { Link } from 'react-router-dom'

export default function ErrorBoundary() {
  return (
    <div className={Styles.container}>
        <img src="/error-img.png" alt="" />
        <h1>Error 404</h1>
        <p>Página no encontrada</p>
        <Link to={'/home/ViewCars'} className={Styles.btn}>Volver al inicio</Link>
    </div>
  )
}
