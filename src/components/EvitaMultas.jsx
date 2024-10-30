"use client";
import Image from "next/image";
import { Boton } from "./Boton";

export const EvitaMultas = () => {
  return (
    <>
      <section className=" h-full w-full py-[30px] text-charly4  px-5 lg:px-0 bg-[url('https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg')] bg-cover bg-center ">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-[40px] lg:text-[60px] font-black text-center">
            Cumple las reglas del juego: Evita multas
          </h1>
          <div className="flex flex-col items-center lg:flex-row  gap-10 px-[30px]">
            <p className="text-[30px] text-center lg:w-[400px]">
              La nueva normativa del ISPCH para las farmacias implica conocer la
              trazabilidad de punta a punta de los medicamentos.{" "}
            </p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/Logotipo_del_Instituto_de_Salud_P%C3%BAblica_de_Chile.png"
              width={300}
              height={200}
              className=""
              alt="logo gobierno"
            />
          </div>

          <div className="flex flex-col  lg:flex-row lg:items-center gap-10 justify-center  text-center pt-5">
            <p className="text-[40px] p-4  lg:w-[700px] font-extrabold">
              {" "}
              Evita sanciones en las fiscalizaciones sanitarias y tributarias
              con nuestro e-book
            </p>
            <div>
              <Boton children={"MÁS INFO"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
