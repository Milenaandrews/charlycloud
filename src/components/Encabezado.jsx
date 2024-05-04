'use client'
import React, { useRef} from 'react'
import { motion, useTransform } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'
import { useScroll } from "framer-motion"


const Encabezado = () => {
        const ref = useRef(null)
        const { scrollYProgress } = useScroll({
            target:ref,
            offset: ["end end", "end start"]
    })
    const sm = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
   

    return (
        <motion.div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 content-center gap-5 h-screen mx-0 px-0 w-screen xl:px-70 sm:px-20 bg-cover bg-center' style={{ backgroundImage: `url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1713405556/nubes_charly_cloud_nawowy.png)`}}>
            <motion.div style={{y:sm}} variants={fadeIn("left", 0.5)} initial="hidden" animate="show" exit="hidden" className=' flex justify-center' >
                <div className=' rounded text-justify text-blue-900 text-xl decoration-4 p-20'>
                    <p><b className='text-xl'>Charly Cloud</b>
                        <br />Software especializado en<br />  Gestión de Inventario y Ventas para Farmacias</p>

                </div>
            </motion.div>
            <motion.div style={{y:sm}} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden">
                    <div  autoPlay className='flex justify-center h-full sm:h-auto rounded'>
                        <video autoPlay muted loop width="500" height="200">
                            <source src="https://res.cloudinary.com/dzppqa6a9/video/upload/c_lpad,w_1920/v1713325312/video_farma_4_jtdhpf.mp4" type="video/mp4" />

                        </video>
                    </div>
              

            </motion.div>

        </motion.div>
    )
}

export default Encabezado