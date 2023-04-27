import React from 'react'
import img1 from "../assets/images/Recursos IMG/wp9073631.jpg";

const Acerca = () => {
  return (
    <div className='mt-[30px] flex h-[450px]'>
        <div className='h-full w-[50%] text-center px-[30px]'>
          <h1 className='text-[25px] pt-[25%] text-[45px] font-body1'>
            -- ¿Quiénes somos? --
            </h1>
          <p className='text-[20px] mt-1 font-body1 mb-4'>
            Subtitulo
            </p>
        </div>
        <div className='w-[50%] '>
            <img src={img1} alt="" className='shadow-2xl mt-[10%] w-[620px] h-[300px]'/>
        </div>
    </div>
  )
}

export default Acerca