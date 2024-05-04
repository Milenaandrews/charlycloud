import React from 'react'

const Planes = () => {
  return (
    <section id='planes' className='h-[full] w-full flex flex-col items-center py-5 bg-gradient-to-r from-charly2 from-30% via-charly via-50% to-charly2 to-30%"'>

      <div>
        <h1 className='text-white font-bold text-[20px] pb-10 '>planes</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>        
        <div className='h-[300px] w-[250px] bg-black rounded  transition hover:scale-125 hover:duration-500 '> </div>
        <div className='h-[300px] w-[250px] bg-black rounded transition hover:scale-125 hover:duration-500'></div>
        <div className='h-[300px] w-[250px] bg-black rounded transition hover:scale-125 hover:duration-500'></div>
                
      </div>


    </section>
  )
}

export default Planes