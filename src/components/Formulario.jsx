"use client";
import React, { useContext, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import ContactoContext from "@/context/Contacto/ContactoContext";
import { errorAlert, successAlert } from "./utils/toastify";
import { BotonLoading } from "./BotonLoading";

const Formulario = () => {
  const { guardarContacto } = useContext(ContactoContext);

  const initialValues = {
    nombre: "",
    farmacia: "",
    email: "",
  };

  const [user, setUser] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await guardarContacto(user);
      //alert("registro existoso");
      successAlert();
      setUser(initialValues);
      setLoading(false);
    } catch (error) {
      console.error("Error durante el registro de usuario", error);
      //alert("registro fallido")
      errorAlert();
      setUser(initialValues);
      setLoading(false);
    }
  };

  const changeMode = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="form"
      className="flex w-full h-[800px] lg:h-[750px]  flex-col items-center gap-10  bg-[url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1721235265/Cloudy_2_gph239.svg)] bg-cover md:pt-14"
    >
      <p className="text-[40px] text-white font-bold  text-center px-4">
        {" "}
        Llena tus datos y te regalamos nuestro e-book
      </p>
      {/* <div className="flex bg-[rgba(8,61,95,0.6)] rounded-xl h-auto w-[350px] flex-col items-center  gap-4 p-3 md:w-[500px] pt-10 pb-5">
        <Input
          className="md:w-[450px]"
          type="text"
          label="Nombre de Contacto"
          required
          value={user.nombre}
          name="nombre"
          onChange={changeMode}
        />
        <Input
          className="md:w-[450px]"
          type="email"
          label="Email"
          required
          value={user.email}
          name="email"
          onChange={changeMode}
        />
        <Input
          className="md:w-[450px]"
          type="text"
          label="Farmacia"
          required
          value={user.farmacia}
          name="farmacia"
          onChange={changeMode}
        />

        {/* <Button color="primary" onClick={handleContact}>
          Enviar
        </Button> */}
      {/* <Boton
          children="Enviar"
          className="bg-charly1 text-white scale-75"
          onClick={handleContact}
        /> */}
      {/* </div> */}
      <form
        onSubmit={handleContact}
        className="flex bg-[rgba(8,61,95,0.6)] rounded-xl h-auto w-[350px] flex-col items-center gap-4 p-3 md:w-[500px] pt-10 pb-5"
      >
        <Input
          className="md:w-[450px]"
          type="text"
          label="Nombre de Contacto"
          required
          value={user.nombre}
          name="nombre"
          onChange={changeMode}
        />
        <Input
          className="md:w-[450px]"
          type="email"
          label="Email"
          required
          value={user.email}
          name="email"
          onChange={changeMode}
        />
        <Input
          className="md:w-[450px]"
          type="text"
          label="Farmacia"
          value={user.farmacia}
          name="farmacia"
          onChange={changeMode}
        />
        {loading ? (
          <BotonLoading />
        ) : (
          <Button type="submit" className="bg-charly1 text-white scale-100">
            Enviar
          </Button>
        )}
      </form>
    </section>
  );
};

export default Formulario;
