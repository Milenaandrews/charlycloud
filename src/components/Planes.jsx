'use client'
const Planes = () => {
  return (
    <section id='planes' className='h-full w-full flex flex-col py-10  bg-charly1 bg-cover'>

        <div className=''>
          <h1 className='text-white font-bold text-[50px] text-center pb-16 '> ELIGUE TU PLAN </h1>
        </div>
       

        <div className='flex flex-col md:flex-row wrap gap-[100px] justify-center items-center'>        
          <div className='h-[400px] w-[300px] bg-[#083d5f] rounded-[20px] transition hover:scale-125 hover:duration-500'>
            <h1 className="text-center text-white font-bold pt-5 text-[20px]">Básico</h1>
          </div>
          <div className='h-[400px] w-[300px] bg-[#083d5f] rounded-[20px] transition hover:scale-125 hover:duration-500'>
            <h1 className="text-center text-white font-bold pt-5 text-[20px]" >Básico Plus </h1>
          </div>
          <div className='h-[400px] w-[300px] bg-[#083d5f] rounded-[20px] transition hover:scale-125 hover:duration-500'>
            <h1 className="text-center text-white font-bold pt-5 text-[20px]">Full</h1>
          </div>
          
        </div>


    </section>
  )
}

export default Planes