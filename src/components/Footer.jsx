'use client'

import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex h-full w-full bg-gradient-to-r from-[#1182ce] to-[#053890] text-white text-center items-center justify-around py-10  ">
      <Image src='https://res.cloudinary.com/dzppqa6a9/image/upload/v1709075705/logocharlysinfondo_omzz7l.png' width={200} height={200} />
      <div className="flex flex-col justify-center items-center gap-5">
        <h3>Contacto +569 135454543</h3>
        <h3>Almirante Latorre 260</h3>
        <ul className="socials">
          {/* <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
        <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
        <li><Link href="#"><i className="fa fa-google-plus"></i></Link></li>
        <li><Link href="#"><i className="fa fa-youtube"></i></Link></li> */}
          <li><Link href="#"><FaLinkedin className="scale-150" /></Link></li>
        </ul>
        <div className="footer-bottom">
          <p>&copy;2024 CHARLY CLOUD. Todos los derechos reservados. </p>
        </div>
      </div>


    </section>
  )
}

export default Footer