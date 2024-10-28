"use client";
import { caracteristicas } from "@/constants/caracteristicas";
import Image from "next/image";
import { useRef, useState } from "react";
import { Boton } from "./Boton";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";
export const BeneficiosCaracteristicas3 = () => {
  const [toggle, setToggle] = useState(caracteristicas[6].id);

  return (
    <>
      <section className=" h-full w-full py-[30px] text-charly1 bg-charly4 bg-repeat-y bg-cover bg-center px-5 lg:px-0 ">
        {/* //!! ACORDION 3 */}

        <div className="text-[40px] lg:text-[50px] text-center font-extrabold py-10 ">
          <h3 className=""> Atención farmacéutica: Fidelización</h3>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center gap-[20px] lg:gap-[100px] ">
          <div className="px-3">
            {caracteristicas
              .slice(6, 9)
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
          <div>
            <div>
              <Accordion
                className="rounded-[10px] min-w-[300px] lg:min-w-[600px]  lg:max-w-[600px]  text-charly5 "
                defaultExpandedKeys={["7"]}
                variant="splitted"
                itemClasses={{
                  title: "font-extrabold text-[20px] text-charly7",
                  base: "",
                }}
              >
                {caracteristicas.slice(6, 9).map(({ content1, title, id }) => (
                  <AccordionItem
                    key={id}
                    className=" text-charly5 p-5 !bg-[#fafdfe]"
                    aria-label="Accordion 3"
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

        <div className="flex flex-col  lg:flex-row items-center justify-center text-balance py-10 lg:gap-[50px] ">
          <Boton
            className=" bg-charly1 text-white"
            iconClass="text-white"
            children={"MÁS INFO"}
          />

          <p className="text-[40px] p-4 lg:p-0 lg:w-[700px] font-extrabold text-center">
            Construye relaciones sólidas con tus pacientes con nuestro e-book
          </p>
        </div>
      </section>
    </>
  );
};
