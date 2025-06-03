import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Edutalent Prediction Portal</h1>
        <p className='text-light lead'>
          Avances significativos del portal de predicción de Edutalent, que permite a los usuarios predecir el rendimiento académico de los estudiantes utilizando modelos de machine learning.
        </p>
        <Button text="Explore Now" class="btn-info" url="/dashboard" />
      </div>
    </div>
  )
}

export default Main
