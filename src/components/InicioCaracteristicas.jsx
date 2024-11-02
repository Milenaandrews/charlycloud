"use client";

import Image from "next/image";

export const InicioCaracterisiticas = () => {
  return (
    <>
      <section className=" h-full  w-full text-charly4  bg-[url('https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg')] bg-cover bg-center p-4 ">
        <div className=" flex  flex-col lg:gap-[150px] lg:flex-row items-center justify-center ">
          <div className=" flex flex-col text-[30px]   rounded-xl  text-center font-extrabold text-balance justify-center items-center md:h-[600px]  ">
            <h1 className="text-[70px] text-white font-extrabold">
              {" "}
              Charly Cloud<span className="font-extralight">&#174;</span>{" "}
            </h1>

            <h2 className=" flex flex-col text-center justify-center  md:w-[650px] md:h-[300px] rounded-xl   ">
              Es intuitivo y fácil de usar. Ayuda a las farmacias a
              rentabilizar, organizar, brindar la mejor atención a sus pacientes
              y cumplir con las normativas legales.
            </h2>
          </div>

          <div className="flex items-center justify-center w-[350px] lg:w-[600px] h-[300px] justify-items-center">
            {/* <video
              src="https://res.cloudinary.com/dyiu99z2a/video/upload/v1729783436/5_pdf1rz.mp4"
              className=" h-[300px] md:h-full object-cover rounded-3xl shadow-large"
              autoPlay
              muted
              loop
              cover
            ></video> */}
            <video
              width="350"
              height="350"
              autoPlay
              muted
              loop
              className="rounded-3xl lg:w-[600px]"
            >
              <source
                src="https://res.cloudinary.com/dyiu99z2a/video/upload/v1729783436/5_pdf1rz.mp4"
                type="video/mp4"
              />
            </video>

            {/* <Image
              src="https://res.cloudinary.com/dyiu99z2a/image/upload/v1720058749/1_hh3u1m.png"
              alt="imagen"
              width={250}
              height={250}
              className="rounded-xl"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};
