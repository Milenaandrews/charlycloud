'use client'
import React, { useState } from 'react'
import { caracteristicas } from '@/constants/caracteristicas'
import Image from 'next/image'
const ByC = () => {

    const [toggle, setToggled] = useState(caracteristicas[2].id)

    return (
        <section className='h-full w-full bg-grey-400'>
            <div className='h-[500px] w-[500px] '>
                <h1 className='text-white '>Nuevo beneficio y caracteristicas</h1>
                <div>

                    {caracteristicas.map(({ backgroundImage, content1, title, id }) => {
                        return (
                            <div key={id} className='flex flex-row wrap'>
                                <div className="collapse collapse-plus bg-red-200">
                                    <input type="radio" name="my-accordion-3" defaultChecked={toggle === id} onClick={()=> setToggled(id)}/>
                                    <div className="collapse-title text-xl font-medium">
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="collapse-content">
                                        <p>{content1} </p>
                                    </div>
                                </div>
                                <div>
                                    
                                    {toggle === id ? (<Image src={backgroundImage} width={500} height={500} alt='imagen' />): null}

                                    
                                </div>
                            </div>
                        )

                    })}

                </div>


            </div>
        </section >
    )
}

export default ByC
