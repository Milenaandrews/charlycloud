'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'

import { beneficios } from '@/constants/beneficios'
import Image from 'next/image'




const Beneficios = () => {
  return (
    <section id='beneficios' className="flex flex-wrap  h-full w-full pt-[70px] justify-items-center justify-center   ">
      {beneficios.map((item) => (
        <motion.div key={item.title} whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden" className='flex flex-col h-80 w-80 md:w-96 md:h-96 m-12 relative group cursor-pointer shadow-xl overflow-hidden rounded-lg'>
          <div className='flex h-full w-full absolute rounded-md transition transform group-hover:scale-110 group-hover:rotate-3 group-hover:duration-500'>
            <Image
              fill
              alt={item.title}
              src={item.bgCardImage}
            />
          </div>

          <div className='flex flex-col justify-content text-center bottom-0 gap-1 bg-charly2 w-72 h-40 absolute rounded  p-3 text-white transition-all  bg-opacity-50 group-hover:duration-500 group-hover:h-full group-hover:bg-opacity-100'>
            <h1 className=' font-bold  pb-1 text-2xl pt-10 group-hover:pt-0'>{item.title}</h1>
            <p className='opacity-0 group-hover:opacity-100  overflow text-lg  '>{item.description}</p>
          </div>
          

        </motion.div>
      ))}


    </section>
  )
}

export default Beneficios