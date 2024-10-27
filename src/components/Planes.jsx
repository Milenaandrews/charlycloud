"use client";
import { TiTick } from "react-icons/ti";

const Planes = () => {
  return (
    <section
      id="planes"
      className="h-full w-full flex flex-col py-10  bg-charly1 bg-cover text-white"
    >
      <h1 className=" font-bold text-[50px] text-center pb-16 px-5 ">
        {" "}
        ELIGE EL PLAN QUE MÁS TE ACOMODE{" "}
      </h1>

      <div className="flex flex-col lg:flex-row wrap gap-[100px] justify-center items-center ">
        <div className="h-[400px] w-[300px] bg-[#083d5f] rounded-[20px] transition lg:hover:scale-125 lg:hover:duration-500 shadow-3xl">
          <h1 className="text-center text-white font-bold pt-5 text-[20px]">
            Básico
          </h1>
          <ul>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
            <li>
              <TiTick className="text-charly1" /> hola
            </li>
          </ul>
        </div>
        <div className="h-[400px] w-[300px] bg-[#083d5f] rounded-[20px] transition hover:scale-125 hover:duration-500 shadow-3xl">
          <h1 className="text-center text-white font-bold pt-5 text-[20px]">
            Básico Plus{" "}
          </h1>
        </div>
        <div className="h-[400px] w-[300px] bg-[#083d5f] rounded-[20px] transition hover:scale-125 hover:duration-500 shadow-3xl">
          <h1 className="text-center text-white font-bold pt-5 text-[20px]">
            Full
          </h1>
        </div>
      </div>
      <div className="flex flex-col  items-center pt-14 font-semibold text-center gap-5 px-3">
        <h2 className=" text-[50px]">Beneficios adicionales</h2>
        <p className=" text-[30px]">
          Integras un programa de beneficios exclusivo para clientes
        </p>
        <p className=" text-[30px]">
          Acceso a talleres gratuitos en negocio y medioambientales del rubro
          Farmacéutico
        </p>
      </div>
    </section>
  );
};

export default Planes;
