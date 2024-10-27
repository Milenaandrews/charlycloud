import Image from "next/image";
import Link from "next/link";
import { Boton } from "./Boton";

export const FinalCaracteristicas = () => {
  return (
    <section className=" h-full w-full text-charly1 p-10 bg-charly4  ">
      <div className="flex lg:flex-row flex-col text-center gap-5 lg:gap-[70px] justify-center items-center ">
        <div className="flex flex-col  text-center  gap-10 lg:w-[50%]  ">
          <p className="md:text-[60px] text-[38px] font-extrabold leading-tight ">
            CHARLY CLOUD ES UN <span> SOFTWARE DE FARMACIA </span> DISEÑADO POR
            FARMACÉUTICOS
          </p>
          <p className="text-[30px] text-charly1 ">
            Poseemos años de experiencia tras el mesón. Entendemos tus desafíos
            y dolencias, proponemos soluciones que realmente funcionan en una
            farmacia.
          </p>
          <p className="text-[30px] md:pb-10">
            Hablamos con propiedad. Registrate para recibir nuestro e-book
            “Gestión de Farmacia”
          </p>
        </div>
        <div className=" flex justify-center w-[350px] lg:w-[600px] lg:h-[500px] ">
          <video
            width="350"
            height="350"
            autoPlay
            muted
            loop
            className="lg:w-[650px] rounded-3xl"
          >
            <source
              src="https://res.cloudinary.com/dyiu99z2a/video/upload/v1729783441/6_ofb5vf.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6">
        <Boton
          className=" bg-charly1 text-white"
          iconClass="text-white"
          children={"MÁS INFO"}
        />
      </div>
    </section>
  );
};
