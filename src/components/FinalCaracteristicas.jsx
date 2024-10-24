import Image from "next/image";
import Link from "next/link";
import { Boton } from "./Boton";

export const FinalCaracteristicas = () => {
  return (
    <section className=" flex flex-col h-full w-full text-charly1 p-10 bg-charly4  ">
      <div className="flex lg:flex-row  gap-[70px] justify-center ">
        <div className="flex flex-col  text-center  gap-10 w-[900px] ">
          <p className="md:text-[50px] text-[40px] font-bold ">
            CHARLY CLOUD ES UN <span> SOFTWARE DE FARMACIA </span> DISEÑADO POR
            FARMACÉUTICOS
          </p>
          <p className="text-[30px] ">
            Poseemos años de experiencia tras el mesón. Entendemos tus desafíos
            y dolencias, proponemos soluciones que realmente funcionan en una
            farmacia.
          </p>
          <p className="text-[30px] md:pb-10">
            Hablamos con propiedad. Registrate para recibir nuestro e-book
            “Gestión de Farmacia”
          </p>
        </div>
        <div className=" flex items-center justify-center ">
          <Image
            src="https://res.cloudinary.com/dyiu99z2a/image/upload/v1720058749/1_hh3u1m.png"
            alt="imagen"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="flex items-center justify-center pt-6">
        <Boton
          children="mas info"
          className=" bg-charly4 text-charly text-[30px] font-extrabold h-[70px] self-center "
        />
      </div>
    </section>
  );
};
