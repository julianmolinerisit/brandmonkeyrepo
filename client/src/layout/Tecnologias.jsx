import React from 'react'
import img1 from "../assets/images/Recursos IMG/wp9982330.jpg";

const Tecnologias = () => {
  return (
    <div>
        <div className='flex h-[200px] items-center justify-center lg:justify-center'>
        <div className='h-full text-center lg:text-center px-[30px]'>
          <h1 className='text-[25px] mt-[70px] lg:mt-[30px] lg:text-[45px] font-body1'>
            -- Tecnologías --
            </h1>
        </div>
      </div>
      <div className='flex h-[270px] mb-[50px]'>
        <div className=''>
          <img src={img1} alt="" className='mx-3 h-[270px] w-[180px] '/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div >
          <img src={img1} alt="" className='mx-2 h-[270px] w-[180px]'/>
        </div>
        <div className='px-1 absolute right-[5px] mt-[135px] bg-green-600'>
          <ion-icon name="chevron-forward-sharp"></ion-icon>
        </div>
        <div className='px-1 absolute left-[5px] mt-[135px] bg-green-600'>
          <ion-icon name="chevron-back-sharp"></ion-icon>
        </div>
      </div>
      
    </div>
  )
}

export default Tecnologias