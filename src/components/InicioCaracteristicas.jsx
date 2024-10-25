"use client";

export const InicioCaracterisiticas = () => {
  return (
    <>
      <section className=" flex justify-center align-middle h-auto  w-full text-charly4  bg-[url('https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg')] bg-cover bg-center">
        <div className=" flex  flex-col gap-4 lg:flex-row items-center space-x-[300px]  ">
          <div className=" flex flex-col text-[30px]   rounded-xl  text-center font-extrabold text-balance justify-center items-center md:h-[600px]  ">
            <h1 className="text-[60px]">
              {" "}
              Charly Cloud<span className="font-extralight">&#174;</span>{" "}
            </h1>

            <h2 className=" flex flex-col text-center justify-center  md:w-[650px] md:h-[300px] rounded-xl   ">
              Es intuitivo y fácil de usar ayudando a las farmacias a
              rentabilizar, organizar, brindar la mejor atención a sus pacientes
              y cumplir con las normativas legales.
            </h2>
          </div>

          <div className="">
            <video
              src="https://res.cloudinary.com/dyiu99z2a/video/upload/v1729783436/5_pdf1rz.mp4"
              className=" h-[300px] md:h-full object-cover rounded-3xl shadow-large"
              autoPlay
              muted
              loop
              cover
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};
