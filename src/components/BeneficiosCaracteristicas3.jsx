'use client'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { ButtonMasInfo } from './ButtonMasInfo'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useScroll, useTransform, motion } from 'framer-motion'
import { FaPlus } from 'react-icons/fa6'
import { PiLineVerticalBold } from 'react-icons/pi'
export const BeneficiosCaracteristicas3 = () => {

    const [toggle, setToggle] = useState(caracteristicas[6].id)

    return (
        <>

            <section className=' h-full w-full py-[30px] text-white bg-[url("https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg")] bg-repeat-y bg-cover bg-center px-5 lg:px-0 '>


                {/* //!! ACORDION 3 */}


                <div className='text-[50px] text-center font-extrabold py-10'>
                    <h3> Atención farmacéutica: Fidelización</h3>
                </div>

                <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] lg:gap-[100px] '>
                    <div className='px-3'>
                        {caracteristicas.slice(6, 9).map(({ backgroundImage, id }) => (
                            toggle === id ? (<Image key={id} className='rounded-xl ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                        ))}
                    </div>
                    <div>
                        <div>
                            <Accordion
                                className='rounded-[10px] min-w-[300px] lg:min-w-[600px]  lg:max-w-[600px]  text-charly5 '
                                defaultExpandedKeys={['7']}
                                variant="splitted"
                                itemClasses={{
                                    title: "font-extrabold text-[20px] text-charly7",
                                    base: ""
                                }}
                            >
                                {caracteristicas.slice(6, 9).map(({ content1, title, id }) => (
                                    <AccordionItem
                                        key={id}
                                        className=' text-charly5 p-5' aria-label="Accordion 3"
                                        title={title}
                                        onPress={() => setToggle(id)}
                                        indicator={({ isOpen }) => (isOpen ? <PiLineVerticalBold /> : <FaPlus />)}
                                        >
                                        {content1}
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col  lg:flex-row items-center justify-center text-balance py-10 lg:gap-[50px] '>

                    <ButtonMasInfo />
                    <p className='text-[40px] p-4 lg:p-0 lg:w-[700px] font-extrabold text-center'>Construye relaciones sólidas con tus ​pacientes con nuestro e-book</p>
                </div>


            </section >
        </>
    )
}
