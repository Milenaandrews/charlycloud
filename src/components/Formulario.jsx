'use client'
import React, { useContext, useState } from 'react'
import {Input, Button } from "@nextui-org/react"
import ContactoContext from '@/context/Contacto/ContactoContext'



const Formulario = () => {

  const {guardarContacto}= useContext(ContactoContext)

  const initialValues = {
      nombre: "",
      farmacia:"",
      email:""
  }

  const[user, setUser] = useState(initialValues)

  const handleContact = async (e) =>{
    e.preventDefault();
    try { await guardarContacto(user);
      alert("registro existoso");
      setUser(initialValues)
      
    } catch (error) {
      console.error("Error durante el registro de usuario", error);
      alert("registro fallido")
      
    }
  }

  const changeMode = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value

    })
  }



  return (
    <div id='form' className='w-full h-screen flex items-center justify-center py-10 bg-[url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1721235265/Cloudy_2_gph239.svg)] bg-cover'>
      <div className='flex bg-slate-700/70 rounded-xl w-auto h-auto flex-col items-center justify-center gap-4 p-3'>
          <h1>Formulario </h1>
          <Input className='w-80' type="text" label="Nombre de Contacto" required value ={user.nombre} name="nombre" onChange={changeMode} />
          <Input className='w-80' type="text" label="Farmacia" value ={user.farmacia} name="farmacia" onChange={changeMode}/>
          <Input className='w-80' type="email" label="Email" value ={user.email} name='email'onChange={changeMode} />
       
          <Button color="primary" onClick={handleContact}>Enviar</Button>

      </div>
    
    
    </div>
  )
}

export default Formulario