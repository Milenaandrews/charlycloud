import React from 'react'
import {Input, Button } from "@nextui-org/react"



const Formulario = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='flex bg-slate-700/70 rounded-xl w-auto h-auto flex-col items-center justify-center gap-4 p-3'>
          <h1>Formulario </h1>
          <Input className='w-80' type="text" label="Nombre" required />
          <Input className='w-80' type="text" label="Farmacia" />
          <Input className='w-80' type="email" label="Email" />
          <Input className='w-80' type="text" label="Ciudad" />
          <Input className='w-80' type="text" label="País" />
          <Button color="primary" >Enviar</Button>

      </div>
    
    
    </div>
  )
}

export default Formulario