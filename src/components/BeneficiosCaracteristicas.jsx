'use client'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
export const BeneficiosCaracteristicas = () => {

    const [toggle, setToggle] = useState(caracteristicas[0].id)
    const [toggle2, setToggle2] = useState(caracteristicas[4].id)
    const [toggle3, setToggle3] = useState(caracteristicas[7].id)

    return (
        <section className='h-full w-full bg-red py-[80px] text-white'>
            <div className=' flex flex-col wrap items-center w-auto '>
                <h2 className='text-[50px] text-white md:px-72 px-4 text-center font-extrabold '> Charly Cloud <br/> es intuitivo y fácil de usar <br /> ayudando a las farmacias a rentabilizar, organizar, brindar la mejor atención a sus pacientes y cumplir con las normativas legales.  </h2>
            </div>
            <div className='text-[40px] text-center font-bold py-10'><h3> Rentabilidad: Gestión Eficiente</h3> </div>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='px-3'>
                    {caracteristicas.slice(0, 3).map(({ backgroundImage, id }) => (
                        toggle === id ? (<Image key={id} className='rounded-box ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                    ))}
                </div>
                <div>
                    {caracteristicas.slice(0, 3).map(({ content1, title, id }) => (
                        <div key={id}>
                            <div className="flex justify-center items-center">
                                <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px]">
                                    <input type="radio" name="my-accordion-3" defaultChecked={toggle === id} onClick={() => setToggle(id)} />
                                    <div className="collapse-title text-xl font-medium">
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="collapse-content ">
                                        <p>{content1} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col  md:flex-row md:items-start justify-center text-balance text-center pt-5'>
                <p className='text-[40px] p-4 md:w-[700px] font-extrabold'>El conocimiento es poder, ¿sabes lo que esconde tu inventario?. Descubre sus secretos</p>
                <Link className='flex justify-center pt-10' href={'#form'}>
                    <button className="flex btn btn-info btn-lg  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>

            <div className='text-[40px] text-center font-bold py-10'><h3> Atención farmacéutica: Fidelización</h3> </div>

            <div className='flex flex-row-reverse md:flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                    <div>
                        {caracteristicas.slice(3,6).map(({ content1, title, id }) => (
                            <div key={id}>
                                <div className="flex justify-center items-center">
                                    <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px] text-white">
                                        <input type="radio" name="my-accordion-3" defaultChecked={toggle2 === id} onClick={() => setToggle2(id)} />
                                        <div className="collapse-title text-xl font-medium">
                                            <h1>{title}</h1>
                                        </div>
                                        <div className="collapse-content ">
                                            <p>{content1} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='px-3'>
                        {caracteristicas.slice(3,6).map(({ backgroundImage, id }) => (
                            toggle2 === id ? (<Image key={id} className='rounded-box ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                        ))}
                    </div>
                </div>

                <div className='flex flex-col  gap-10 md:flex-row items-center justify-evenly text-balance py-10'>
                    <p className='text-[40px] p-4 md:p-0 md:w-[700px] font-extrabold text-center'>Tus pacientes conectados a tu farmacia, descubre como</p>
                    <Link className='pt-10' href={'#form'}>
                        <button className="flex btn btn-info btn-lg justify-center  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                    </Link>
                </div>
            </div>
            <div className='text-[40px] text-center font-bold py-10'><h3> Cumple las reglas del juego: Evita multas</h3> </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>    </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='px-3'>
                    {caracteristicas.slice(6, 9).map(({ backgroundImage, id }) => (
                        toggle3 === id ? (<Image key={id} className='rounded-box ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                    ))}
                </div>
                <div>
                    {caracteristicas.slice(6, 9).map(({ content1, title, id }) => (
                        <div key={id}>
                            <div className="flex justify-center items-center">
                                <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px] text-white">
                                    <input type="radio" name="my-accordion-3" defaultChecked={toggle3 === id} onClick={() => setToggle3(id)} />
                                    <div className="collapse-title text-xl font-medium">
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="collapse-content ">
                                        <p>{content1} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col  md:flex-row items-center justify-evenly text-balance text-center py-10 '>
                <p className='text-[40px] p-4 md:w-[700px] font-extrabold'>Conoce las 5 causas más frecuentes de multa en la farmacia por el ISP</p>
                <Link className='md:pt-10 ' href={'#form'}>
                    <button className="flex btn btn-info btn-lg justify-center  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>



        </section >
    )
}
