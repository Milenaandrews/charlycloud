'use client'
import React, { useContext, useState } from 'react'
import { Input, Button } from "@nextui-org/react"
import ContactoContext from '@/context/Contacto/ContactoContext'



const Formulario = () => {

  const { guardarContacto } = useContext(ContactoContext)

  const initialValues = {
    nombre: "",
    farmacia: "",
    email: ""
  }

  const [user, setUser] = useState(initialValues)

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      await guardarContacto(user);
      alert("registro existoso");
      setUser(initialValues)

    } catch (error) {
      console.error("Error durante el registro de usuario", error);
      alert("registro fallido")

    }
  }

  const changeMode = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value

    })
  }



  return (
    <section id='form' className='flex w-full h-[700px] md:h-[750px]  flex-col items-center gap-10  bg-[url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1721235265/Cloudy_2_gph239.svg)] bg-cover md:pt-14'>

        <p className='text-[30px] text-white font-bold  text-center px-4'> Llena tus datos y te regalamos nuestro e-book</p>
      

      <div className='flex bg-slate-700/70 rounded-xl w-auto h-auto flex-col items-center  gap-4 p-3'>

        <Input className='w-80' type="text" label="Nombre de Contacto" required value={user.nombre} name="nombre" onChange={changeMode} />
        <Input className='w-80' type="text" label="Farmacia" value={user.farmacia} name="farmacia" onChange={changeMode} />
        <Input className='w-80' type="email" label="Email" value={user.email} name='email' onChange={changeMode} />

        <Button color="primary" onClick={handleContact}>Enviar</Button>

      </div>


    </section>
  )
}

export default Formulario