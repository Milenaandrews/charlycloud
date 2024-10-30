"use client";
import { caracteristicas } from "@/constants/caracteristicas";
import Image from "next/image";
import { useState } from "react";
import { Boton } from "./Boton";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { PiLineVerticalBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

export const BeneficiosCaracteristicas2 = () => {
  const [toggle, setToggle] = useState(caracteristicas[3].id);

  return (
    <>
      <section className=" h-full w-full py-[30px] text-charly4 bg-[url('https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg')] bg-cover bg-center  bg-[#F7F7F7]  px-5 lg:px-0 ">
        {/* //!! ACORDION 2 */}

        <div className="text-[50px] text-center font-extrabold py-10">
          <h3> Asignación de funciones por roles</h3>
        </div>

        <div className="flex flex-col flex-wrap items-center justify-center gap-[20px] lg:gap-[10px] ">
          <div className="flex flex-col-reverse  lg:flex-row flex-wrap items-center justify-center gap-[20px] lg:gap-[100px] ">
            <Accordion
              className="rounded-[10px] min-w-[300px]  lg:min-w-[600px] lg:max-w-[600px] text-charly5 "
              variant="splitted"
              itemClasses={{
                title: "font-extrabold text-[20px] text-charly7",
                base: "",
              }}
              defaultExpandedKeys={["4"]}
            >
              {caracteristicas.slice(3, 6).map(({ content1, title, id }) => (
                <AccordionItem
                  key={id}
                  className=" text-charly5 p-5 !bg-[#fafdfe]"
                  aria-label={`Accordion ${id}`}
                  title={title}
                  onPress={() => setToggle(id)}
                  indicator={({ isOpen }) =>
                    isOpen ? <PiLineVerticalBold /> : <FaPlus />
                  }
                >
                  {content1}
                </AccordionItem>
              ))}
            </Accordion>

            <div className="px-3">
              {caracteristicas
                .slice(3, 6)
                .map(({ backgroundImage, id }) =>
                  toggle === id ? (
                    <Image
                      key={id}
                      className="rounded-xl shadow-3xl "
                      src={backgroundImage}
                      width={400}
                      height={300}
                      alt="imagen"
                      loading="lazy"
                    />
                  ) : null
                )}
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center justify-evenly text-balance py-10">
            <p className="text-[40px] p-4 lg:p-0 lg:w-[700px] font-extrabold text-center">
              ¿Tienes más de un local? Activa la funcionalidad “Traspasos“ y
              optimiza la gestión ​entre locales
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
