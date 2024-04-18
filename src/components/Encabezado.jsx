'use client'
import React from 'react'
import{motion} from 'framer-motion'
import { fadeIn } from './utils/motionTransition'


const Encabezado = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 content-center gap-5 h-screen mx-0 px-0 w-screen xl:px-70 sm:px-20  bg-blue-600/50  '>
            <motion.div variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hidden" className=' flex justify-center' >
                <div className=' rounded text-justify text-black text-xl decoration-4 p-20'>
                    <p><b className='text-xl'>Charly Cloud</b>
                            <br/>Software especializado en<br/>  Gestión de Inventario y Ventas para Farmacias</p>

                </div>
            </motion.div>
            <motion.div  variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden">
                <div autoPlay className='flex justify-center h-full sm:h-auto'>
                    <video autoPlay muted loop width="500" height="200">
                        <source src="https://res.cloudinary.com/dzppqa6a9/video/upload/c_lpad,w_1920/v1713325312/video_farma_4_jtdhpf.mp4" type="video/mp4" />
                        
                    </video>
                </div>

            </motion.div>

        </div>
    )
}

export default Encabezado