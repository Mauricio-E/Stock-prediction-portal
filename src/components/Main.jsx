import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>

      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Edutalent Prediction Portal</h1>
          <p className='text-light lead'>
            Un gran saludo y abrazo para mi querido hijo adoptivo #mauricioespinoza, 
            hoy en su cumpleaños, ¡que sea un gran día y un excelente año!
          </p>
          <Button text="Login" className="btn-outline-info" />
        </div>
      </div>
      
    </>
  )
}

export default Main
