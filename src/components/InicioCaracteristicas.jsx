"use client";

export const InicioCaracterisiticas = () => {
  return (
    <>
      <section className=" h-full w-full text-charly4 pt-[50px] bg-[url('https://res.cloudinary.com/dzppqa6a9/image/upload/v1721181856/Rect_Light_wpdt8h.svg')]">
        <div className=" flex  flex-col lg:flex-row items-center justify-center  ">
          <div className=" flex flex-col text-[30px]   rounded-xl  text-center font-extrabold text-balance justify-center items-center md:h-[600px] md:w-[1000px] ">
            <h1 className="text-[60px]"> Charly Cloud</h1>
            <h2 className=" flex flex-col items-center justify-center  md:w-[650px] md:h-[300px] rounded-xl   ">
              Es intuitivo y fácil de usar ayudando a las farmacias a
              rentabilizar, organizar, brindar la mejor atención a sus pacientes
              y cumplir con las normativas legales.
            </h2>
          </div>

          <div>
            <video
              src="https://www.evitalrx.in/webroot/images/evital-images/CSV-Import.webm"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};
