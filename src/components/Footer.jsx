"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex h-full w-full bg-gradient-to-r from-[#1182ce] to-[#053890] text-white text-center items-center justify-around py-10  ">
      <Image
        src="https://res.cloudinary.com/dyiu99z2a/image/upload/v1729779197/logo_blanco-removebg-preview_tlwc21.png"
        width={200}
        height={200}
        alt="logo"
      />
      <div className="flex flex-col justify-center items-center gap-5">
        <h3>Contacto +569 81596754</h3>
        <ul className="socials flex gap-5 ">
          <li>
            <Link
              href="https://www.instagram.com/charlycloud.info?igsh=MXQxNTY0Y2ppdTJtMg%3D%3D"
              target="_blank"
              aria-label="Enlace a Instagram de CharlyCloud"
            >
              <FaInstagram className="scale-150" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/share/JK1YfoSnNA2mP3yZ/?mibextid=LQQJ4d"
              target="_blank"
              aria-label="Enlace a Facebook de CharlyCloud"
            >
              <FaFacebookSquare className="scale-150" />
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=56981596754"
              target="_blank"
              aria-label="Enlace a Whatsapp de CharlyCloud"
            >
              <FaWhatsapp className="scale-150" />
            </Link>
          </li>
        </ul>
        <div className="footer-bottom">
          <p>&copy;2024 CHARLY CLOUD. Todos los derechos reservados. </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
