'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'

import { beneficios } from '@/constants/beneficios'
import Image from 'next/image'




const Beneficios = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 h-full items-center px-5 sm:px-20 xl:px-40">
      {beneficios.map((item) => (
        <motion.div key={item.title} whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden" className='flex flex-col min-h-[200px] relative group cursor-pointer shadow-xl'>

          <div className='text-center bg-blue-700/80 h-[50px] absolute w-[150px] buttom-0 z-20 rounded group-hover:h-full transition-all'>
            <h1 className='font-bold flex'>{item.title}</h1>
            <p className='opacity-0 group-hover:opacity-100 lg-text-[18px] t'>{item.description}</p>
          </div>
          <div className='h-full w-full rounded absolute'>
            <Image
              fill
              className='rounded absolute shadow-xl'
              alt={item.title}
              src={item.bgCardImage}
            />


          </div>

        </motion.div>
      ))}


    </div>
  )
}

export default Beneficios