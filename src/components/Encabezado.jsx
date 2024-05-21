'use client'
import React, { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
import { fadeIn } from './utils/motionTransition'
import { useScroll } from "framer-motion"
import Link from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";



const Encabezado = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })
    const sm = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])


    return (
        <motion.div ref={ref} className='flex flex-col wrap gap-5 h-full w-full py-10  xl:px-70  bg-cover bg-center justify-center' style={{ backgroundImage: `url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1713405556/nubes_charly_cloud_nawowy.png)` }}>
            <div className=' flex justify-center ' >
                <div className=' text-blue-900 text-xl px-3'>
                    <h1 className='mb-10'><span className='text-[30px] font-bold'>Charly Cloud</span> </h1>
                    <h2 className='text-[55px] font-bold leading-relaxed '>La farmacia es un mundo complejo <br />
                        ¿Tu software también?<br />
                        ¡Simplifica tu gestión!
                    </h2>

                </div>
            </div>
            <div className='flex justify-end md:pr-52 pr-3'>
                <Link href={'#form'}>
                    <button className="btn btn-info btn-lg text-white rounded-xl">MÁS INFO  <FaArrowCircleRight className='scale-150' /></button>
                </Link>
            </div>
            {/* <motion.div style={{y:sm}} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden">
                    <div   className='flex justify-center h-full sm:h-auto '>
                        <video  autoPlay muted loop width="500" height="200">
                            <source src="https://res.cloudinary.com/dzppqa6a9/video/upload/c_lpad,w_1920/v1713325312/video_farma_4_jtdhpf.mp4" type="video/mp4" />

                        </video>
                    </div>
              

            </motion.div> */}

        </motion.div>
    )
}

export default Encabezado