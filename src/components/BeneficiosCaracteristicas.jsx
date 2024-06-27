'use client'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
import { useState } from 'react'
import { ButtonMasInfo } from './ButtonMasInfo'

import { Accordion, AccordionItem } from "@nextui-org/accordion";
export const BeneficiosCaracteristicas = () => {

    const [toggle, setToggle] = useState(caracteristicas[0].id)
    const [toggle2, setToggle2] = useState(caracteristicas[3].id)
    const [toggle3, setToggle3] = useState(caracteristicas[6].id)

    return (
        <section className='h-full w-full py-[30px] text-white bg-[url("https://res.cloudinary.com/dzppqa6a9/image/upload/v1719454459/polygon-scatter-haikei_1_qop9tx.png")]  bg-repeat '>
            <div className=' flex flex-col wrap items-center '>
                <h2 className='text-[30px] text-white md:px-[200px]  text-center font-extrabold text-balance '> <span className='text-[60px]'>Charly Cloud</span> <br /> Es intuitivo y fácil de usar ayudando a las farmacias a rentabilizar, organizar, brindar la mejor atención a sus pacientes y cumplir con las normativas legales.  </h2>
            </div>

            {/* //!! Primer acordion */}

            <div className='text-[50px] text-center font-extrabold py-10'>
                <h3> Rentabilidad: Gestión Eficiente</h3>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='px-3 min-h-[400px] flex items-center justify-center'>
                    {caracteristicas.slice(0, 3).map(({ backgroundImage, id }) => (
                        toggle === id ? (<Image key={id} className='rounded-xl shadow-3xl' src={backgroundImage} width={400} height={400} alt='imagen' />) : null))}
                </div>
                <div>
                    {caracteristicas.slice(0, 3).map(({ content1, title, id }) => (
                        <div key={id}>

                            <Accordion className=' bg-charly4 rounded-[10px]  min-w-[300px]  md:min-w-[500px] text-charly5 ' defaultExpandedKeys={['1']}>
                                <AccordionItem key={id} className=' text-charly5 ' aria-label="Accordion 1" title={title} onPress={() => setToggle(id)} >
                                    {content1}
                                </AccordionItem>
                            </Accordion>



                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col  md:flex-row md:items-center gap-10 justify-center  text-center pt-5'>
                <p className='text-[40px] p-4  md:w-[700px] font-extrabold'> Gestiona tu inventario de forma eficiente con nuestro e-book</p>

                <div >
                    <ButtonMasInfo />
                </div>

            </div>

            {/* //!! ACORDION 2 */}

            <div className='text-[50px] text-center font-extrabold py-10'>
                <h3> Asignacion de funciones por roles</h3>
            </div>

            <div className='flex flex-row-reverse md:flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[10px] '>
                <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                    <div>
                        {caracteristicas.slice(3, 6).map(({ content1, title, id }) => (
                            <div key={id}>
                                <Accordion className=' bg-charly4 rounded-[10px] min-w-[300px]  md:min-w-[500px] text-charly5 ' defaultExpandedKeys={['4']} >
                                    <AccordionItem key={id} className=' text-charly5 ' aria-label="Accordion 2" title={title} onPress={() => setToggle2(id)} >
                                        {content1}
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        ))}
                    </div>
                    <div className='px-3'>
                        {caracteristicas.slice(3, 6).map(({ backgroundImage, id }) => (
                            toggle2 === id ? (<Image key={id} className='rounded-box ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-10 md:flex-row items-center justify-evenly text-balance py-10'>
                    <p className='text-[40px] p-4 md:p-0 md:w-[700px] font-extrabold text-center'>Tus pacientes conectados a tu farmacia, descubre como</p>
                    <div >
                        <ButtonMasInfo />
                    </div>
                </div>
            </div>

            {/* //!! ACORDION 3 */}


            <div className='text-[50px] text-center font-extrabold py-10'>
                <h3> Atención farmacéutica: Fidelización</h3>
            </div>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='px-3'>
                    {caracteristicas.slice(6, 9).map(({ backgroundImage, id }) => (
                        toggle3 === id ? (<Image key={id} className='rounded-box ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                    ))}
                </div>
                <div>
                    {caracteristicas.slice(6, 9).map(({ content1, title, id }) => (
                        <div key={id}>
                            <Accordion className=' bg-charly4 rounded-[10px] min-w-[300px]  md:min-w-[500px] text-charly5 ' defaultExpandedKeys={['7']} >
                                <AccordionItem key={id} className=' text-charly5 ' aria-label="Accordion 3" title={title} onPress={() => setToggle3(id)} >
                                    {content1}
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col  md:flex-row items-center justify-evenly text-balance py-10 '>
                <p className='text-[40px] p-4 md:p-0 md:w-[700px] font-extrabold text-center'>Construye relaciones sólidas con tus pacientes con nuestro e-book</p>

                <ButtonMasInfo />

            </div>



        </section >
    )
}
