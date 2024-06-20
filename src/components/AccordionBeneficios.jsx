'use client'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
import { useState } from 'react'

export const AccordionBeneficios = ({caracteristicas}) => {

    const carateristicasPrimeras = caracteristicas.slice(0, 3);
    const carateristicasSegundas = caracteristicas.slice(4, 6);
    const carateristicasTerceras = caracteristicas.slice(7, 9);

    const [toggle, setToggle] = useState(caracteristicas[1].id)

    return (
        <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] md:gap-[100px] '>
        <div className='px-3'>
            {caracteristicas.map(({ backgroundImage, id }) => (
                toggle === id ? (<Image key={id} className='rounded-box ' src={backgroundImage} width={400} height={300} alt='imagen' />) : null
            ))}
        </div>
        <div>
            {caracteristicas.map(({ content1, title, id }) => (
                <div key={id}>
                    <div className="flex justify-center items-center">
                        <div className="collapse collapse-plus bg-charly2/40 w-full md:w-[500px] text-white">
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
    )
}
