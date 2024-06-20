'use client'
import React, { useState } from 'react'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import { AccordionBeneficios } from './AccordionBeneficios'
export const BeneficiosCaracteristicas = () => {
    const caracteristicasPrimeras = caracteristicas.slice(0, 3); 
    

    return (
        <section className='h-full w-full bg-red py-[80px]'>
            <div className='text-white flex flex-col wrap items-center w-auto '>
                <h2 className='text-[50px] md:px-72 px-4 text-center font-extrabold '> Charly Cloud es intuitivo y fácil de usar <br /> ayudando a las farmacias a rentabilizar, organizar, brindar la mejor atención a sus pacientes y cumplir con las normativas legales.  </h2>
            </div>
            <div className='text-[40px] text-charly text-center font-bold py-10'><h3> Rentabilidad: Gestión Eficiente</h3> </div>

            <AccordionBeneficios caracteristicas={caracteristicasPrimeras} />

            <div className='flex flex-col  md:flex-row md:items-start justify-center text-balance text-center pt-5'>
                <p className='text-[40px] p-4 md:w-[700px] text-charly font-extrabold'>El conocimiento es poder, ¿sabes lo que esconde tu inventario?. Descubre sus secretos</p>
                <Link className='flex justify-center pt-10' href={'#form'}>
                    <button className="flex btn btn-info btn-lg  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>


            <div className='text-[40px] text-charly text-center font-bold py-10'><h3> Atención farmacéutica: Fidelización</h3> </div>
            <div className='flex flex-row-reverse md:flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>

                <AccordionBeneficios />

                <div className='flex flex-col  gap-10 md:flex-row items-center justify-evenly text-balance py-10'>
                    <p className='text-[40px] p-4 md:p-0 md:w-[700px] text-charly font-extrabold text-center'>Tus pacientes conectados a tu farmacia, descubre como</p>
                    <Link className='pt-10' href={'#form'}>
                        <button className="flex btn btn-info btn-lg justify-center  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                    </Link>
                </div>
            </div>
                <div className='text-[40px] text-charly text-center font-bold py-10'><h3> Cumple las reglas del juego: Evita multas</h3> </div>
                <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>    </div>
                <div className='flex flex-col  md:flex-row items-center justify-evenly text-balance text-center py-10 '>
                    <p className='text-[40px] p-4 md:w-[700px] text-charly font-extrabold'>Conoce las 5 causas más frecuentes de multa en la farmacia por el ISP</p>
                    <Link className='md:pt-10 ' href={'#form'}>
                        <button className="flex btn btn-info btn-lg justify-center  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                    </Link>
                </div>



        </section >
    )
}
