'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'

import { beneficios } from '@/constants/beneficios'
import Image from 'next/image'




const Beneficios = () => {
  return (
    <section id='beneficios' className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 h-full pt-[70px] items-center justify-items-center  px-[130px] ">
      {beneficios.map((item) => (
        <motion.div key={item.title} whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden" className='flex flex-col h-[300px] w-[400px] relative group cursor-pointer shadow-xl'>

          <div className='flex flex-col justify-content text-center bg-blue-700/80 h-[70px] absolute w-[180px] z-20 rounded group-hover:h-full transition-all p-3'>
            <h1 className=' font-bold  pb-1 '>{item.title}</h1>
            <p className='opacity-0 group-hover:opacity-100 lg-text-[18px] overflow '>{item.description}</p>
          </div>
          <div className='flex  h-full w-full rounded absolute '>
            <Image
              fill
              className='flex rounded absolute shadow-xl'
              alt={item.title}
              src={item.bgCardImage}
            />


          </div>

        </motion.div>
      ))}


    </section>
  )
}

export default Beneficios