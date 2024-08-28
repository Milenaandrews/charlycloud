'use client'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
import {  useState } from 'react'
import { ButtonMasInfo } from './ButtonMasInfo'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
export const BeneficiosCaracteristicas1 = () => {

    const [toggle, setToggle] = useState(caracteristicas[0].id)
  
    return (
        <>
               
        <section className=' h-full w-full py-[30px] text-white bg-[url("https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg")] bg-cover bg-center px-5 lg:px-0 '>

            <div className=' flex flex-col wrap items-center '>
                <h2 className='text-[30px] text-white lg:px-[200px]  text-center font-extrabold text-balance '> <span className='text-[70px]'>Charly Cloud</span> <br /> Es intuitivo y fácil de usar ayudando a las farmacias a rentabilizar, organizar, brindar la mejor atención a sus pacientes y cumplir con las normativas legales.  </h2>
            </div>

            {/* //!! Primer acordion */}

            <div className='text-[50px] text-center font-extrabold py-10'>
                <h3> Rentabilidad: Gestión Eficiente</h3>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] lg:gap-[100px] '>
                <div className='px-3 min-h-[400px] flex items-center justify-center'>
                    {caracteristicas.slice(0, 3).map(({ backgroundImage, id }) => (
                        toggle === id ? (<Image key={id} className='rounded-xl ' src={backgroundImage} width={400} height={400} alt='imagen' />) : null))}
                </div>
                <div>

                    <div >
                        <Accordion className=' bg-charly4 rounded-[10px]  min-w-[300px]   lg:max-w-[600px] lg:min-w-[600px] text-charly5 ' defaultExpandedKeys={['1']}>
                            {caracteristicas.slice(0, 3).map(({ content1, title, id }) => (
                                <AccordionItem key={id} variant="splitted" className=' text-charly5 p-5' aria-label={`Accordion ${id}`} title={title} onPress={() => setToggle(id)} >
                                    {content1}
                                </AccordionItem>

                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>

            <div className='flex flex-col  lg:flex-row lg:items-center gap-10 justify-center  text-center pt-5'>
                <p className='text-[40px] p-4  lg:w-[700px] font-extrabold'> Gestiona tu inventario de forma eficiente con nuestro e-book</p>

                <div >
                    <ButtonMasInfo />
                </div>

            </div>

        </section >
        </>
    )
}
