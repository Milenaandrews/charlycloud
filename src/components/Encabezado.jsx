'use client'
import React, { useRef } from 'react'
import { motion, useTransform } from 'framer-motion'
// import { fadeIn } from './utils/motionTransition'
import { useScroll } from "framer-motion"
import Link from 'next/link'
import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from '@nextui-org/react'


const Encabezado = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "end start"]
    })
    const sm = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])


    return (
        <>
            <div className="video-brackground relative h-full lg:overflow-hidden lg:h-screen ">
                <video src="https://res.cloudinary.com/dyiu99z2a/video/upload/v1718856864/20240620_000835_0002_jerl3a.mp4" autoPlay muted loop className="video pt-10 md:pt-0 h-auto w-auto min-w-full md:min-h-full absolute "  >
                    <source src="video-720p.mp4" type="video/mp4" media="(min-width: 720px)"></source>
                    <source src="video-480p.mp4" type="video/mp4" media="(min-width: 480px)"></source>
                    <source src="video-360p.mp4" type="video/mp4"></source>   
               </video>

                <motion.div ref={ref} className='relative z-1 flex flex-col wrap  gap-[50px] h-auto w-auto min-w-full md:min-h-full pt-8 px-10   xl:px-70  justify-center ' >

                    <div className=' flex justify-center ' >
                        <h1 className=' text-[33px] md:text-[80px] text-white font-extrabold leading-relaxed text-center text-wrap text-shadow-blue'>¡Simplifica la gestión de tu <br /> farmacia con <span> Charly Cloud! </span> </h1>
                    </div>

                    <div className='flex justify-center items-center '>
                        <Link href={'#form'}>
                            <Button className="text-white rounded-[40px] font-extrabold " size="lg" color="primary" variant="ghost">MÁS INFO  <FaArrowCircleRight className='scale-150' /></Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* 
                    etiqueta para colorcar backgroung IM
                    style={{ backgroundImage: `url(https://res.cloudinary.com/dzppqa6a9/image/upload/v1713405556/nubes_charly_cloud_nawowy.png)` }}

                    <motion.div style={{y:sm}} variants={fadeIn("right", 0.5)} initial="hidden" animate="show" exit="hidden">
                    <div   className='flex justify-center h-full sm:h-auto '>
                        <video  autoPlay muted loop width="500" height="200">
                            <source src="https://res.cloudinary.com/dzppqa6a9/video/upload/c_lpad,w_1920/v1713325312/video_farma_4_jtdhpf.mp4" type="video/mp4" />

                        </video>
                    </div>
                    

            </motion.div> */}



        </>
    )

}

export default Encabezado