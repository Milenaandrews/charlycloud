'use client'
import React, { useState } from 'react'
import { caracteristicas1 } from '@/constants/caracteristicas1'
import Image from 'next/image'
import { caracteristicas2 } from '@/constants/caracteristicas2'
import { caracteristicas3 } from '@/constants/caracteristicas3'
import { FaArrowCircleRight } from 'react-icons/fa'
import Link from 'next/link'
const ByC = () => {

    const [toggle, setToggled] = useState(caracteristicas1[1].id)
    const [toggle2, setToggled2] = useState(caracteristicas2[2].id)
    const [toggle3, setToggled3] = useState(caracteristicas3[2].id)

    return (
        <section className='h-full w-full bg-grey-400 py-10'>
            <div className='text-charly flex flex-col wrap items-center '>
                <h1 className='text-[50px] font-bold pb-4 text-center'>Tu farmacia ¡IMPARABLE!</h1>
                <h2 className='text-[30px] md:px-72 px-4 text-center'>Charly Cloud apoya a la farmacias a rentabilizar, brindar la mejor atencion a sus pacientes y cumplir con las normativas legales </h2>
            </div>
            <div className='text-[40px] text-charly text-center font-bold py-10'><h3> Rentabilidad: Gestión Eficiente</h3> </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='px-3'>
                    {caracteristicas1.map(({ backgroundImage, id }) => (
                        toggle === id ? (<Image key={id} className='rounded-box shadow-' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                    ))}
                </div>
                <div>
                    {caracteristicas1.map(({ content1, title, id }) => (
                        <div key={id}>
                            <div className="flex justify-center items-center">
                                <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px] text-white">
                                    <input type="radio" name="my-accordion-3" defaultChecked={toggle === id} onClick={() => setToggled(id)} />
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
                <p className='text-[40px] p-4 md:w-[700px] text-charly font-extrabold'>El conocimiento es poder, ¿sabes lo que esconde tu inventario?. Descubre sus secretos</p>
                <Link className='flex justify-center pt-10' href={'#form'}>
                    <button className="flex btn btn-info btn-lg  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>


            <div className='text-[40px] text-charly text-center font-bold py-10'><h3> Atención farmacéutica: Fidelización</h3> </div>
            <div className='flex flex-row-reverse md:flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div>
                    {caracteristicas1.map(({ content1, title, id }) => (
                        <div key={id}>
                            <div className="flex justify-center items-center">
                                <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px] text-white">
                                    <input type="radio" name="my-accordion-3" defaultChecked={toggle === id} onClick={() => setToggled(id)} />
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
                    {caracteristicas1.map(({ backgroundImage, id }) => (
                        toggle === id ? (<Image key={id} className='rounded-box shadow-xl ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                    ))}
                </div>

            </div>
            <div className='flex flex-col  gap-10 md:flex-row items-center justify-evenly text-balance py-10'>
                <p className='text-[40px] p-4 md:p-0 md:w-[700px] text-charly font-extrabold text-center'>Tus pacientes conectados a tu farmacia, descubre como</p>
                <Link className='pt-10' href={'#form'}>
                    <button className="flex btn btn-info btn-lg justify-center  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>
            <div className='text-[40px] text-charly text-center font-bold py-10'><h3> Cumple las reglas del juego: Evita multas</h3> </div>
            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
                <div className='px-3'>
                    {caracteristicas1.map(({ backgroundImage, id }) => (
                        toggle === id ? (<Image key={id} className='rounded-box shadow-' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
                    ))}
                </div>
                <div>
                    {caracteristicas1.map(({ content1, title, id }) => (
                        <div key={id}>
                            <div className="flex justify-center items-center">
                                <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px] text-white">
                                    <input type="radio" name="my-accordion-3" defaultChecked={toggle === id} onClick={() => setToggled(id)} />
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
                <p className='text-[40px] p-4 md:w-[700px] text-charly font-extrabold'>Conoce las 5 causas más frecuentes de multa en la farmacia por el ISP</p>
                <Link className='md:pt-10 ' href={'#form'}>
                    <button className="flex btn btn-info btn-lg justify-center  text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>



        </section >
    )
}

export default ByC
