'use client'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import {FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import { MdOutlineLocalPharmacy } from "react-icons/md";

import { caracteristicas } from '@/constants/caracteristicas'


const Caracteristicas = () => {
return (
    <section id='caracteristicas' className='flex items-center pt-[70px] flex-col h-full bg-grey-400 '>
        <Swiper
            breakpoints={{
                340:{
                    slidesPerView: 2,
                    spaceBetween: 30,
                    },
                700: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[80%]'
        >
            {caracteristicas.map((item)=> (

                <SwiperSlide key={item.title}>
                    <div className='flex flex-col gap-10 mb-20 group relative shadow-lg ] text-white font-bold rounded-xl  px-6 py-8 h-[350px] w-[180px] sm:w-[250px] sm:h-[250px] lg:h-[300px] lg:w-[250px]  overflow-hidden cursor-pointer'>

                        <div className='xs:h-[250px] absolute inset-0  bg-cover bg-center' style= {{ backgroundImage: `url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1713402048/fondo_tarjeta_f9geu2.png)`}}/>

                        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>
                        <div className=' relative flex flex-col gap-3 '>
                            {/* //!para el icono */}
                            {/* <item.icon className='text-blue-600 group-hover:text-charly w-[32px] h-[32px]'/> */}
                            <MdOutlineLocalPharmacy className='text-blue-600 group-hover:text-charly w-[32px] h-[32px]' />
                            <h1 className='text-xl lg:text-2xl  group-hover:text-blue-400'>{item.title}</h1>
                            <p className='lg-text-[18px] t'>{item.content1}</p>
                            <p className='lg-text-[18px] t'>{item.content2}</p>
                            <p className='lg-text-[18px] t'>{item.content3}</p>
                        </div>
                        <RxArrowTopRight className='absolute bottom-5 left-5 w-[40w] h-[35w] text-white  group-hover:text-charly group-hover:rotate-45 duration-100'/>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>

    </section>
  )
}
export default Caracteristicas