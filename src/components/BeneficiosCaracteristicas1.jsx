"use client";
import { caracteristicas } from "@/constants/caracteristicas";
import Image from "next/image";
import { useState } from "react";
import { Boton } from "./Boton";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaPlus } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";

export const BeneficiosCaracteristicas1 = () => {
  const [toggle, setToggle] = useState(caracteristicas[0].id);
  const itemClasses = {
    title: "font-normal text-medium",
    content: "text-small px-2",
  };

  return (
    <>
      <section className=" h-full w-full py-[30px] text-charly1 bg-charly4 px-5 lg:px-0 ">
        {/* //!! Primer acordion */}

        <div className="text-[50px] text-center font-extrabold py-10">
          <h3> Rentabilidad: Gestión Eficiente</h3>
        </div>

        <div className="flex lg:flex-row flex-wrap items-center justify-center gap-[20px] lg:gap-[100px] ">
          <div className="px-3 min-h-[400px] flex items-center justify-center ">
            {caracteristicas
              .slice(0, 3)
              .map(({ backgroundImage, id }) =>
                toggle === id ? (
                  <Image
                    key={id}
                    className="rounded-xl shadow-3xl"
                    src={backgroundImage}
                    width={400}
                    height={400}
                    alt="imagen"
                  />
                ) : null
              )}
          </div>
          <div>
            <div>
              <Accordion
                className=" rounded-[10px]  min-w-[50px]   md:w-[630px]  text-charly5   "
                defaultExpandedKeys={["1"]}
                variant="splitted"
                itemClasses={{
                  title: "font-extrabold text-[20px] text-charly7",
                  base: "",
                }}
              >
                {caracteristicas.slice(0, 3).map(({ content1, title, id }) => (
                  <AccordionItem
                    key={id}
                    className="text-charly5 p-5 !bg-[#fafdfe]"
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
            </div>
          </div>
        </div>

        <div className="flex flex-col  lg:flex-row lg:items-center gap-10 justify-center  text-center pt-5">
          <p className="text-[40px] p-4  lg:w-[700px] font-extrabold">
            Gestiona tu inventario de forma eficiente con nuestro e-book
          </p>

          <div>
            <Boton
              className=" bg-charly1 text-white"
              iconClass="text-white"
              children={"MÁS INFO"}
            />
          </div>
        </div>
      </section>
    </>
  );
};
