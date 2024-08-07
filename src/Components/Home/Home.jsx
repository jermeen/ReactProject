import React, { useState } from 'react'
import style from './Home.module.css'

import img from '../../assets/image/react.project14.svg'
export default function Home() {
   

  return <>
  
   <div className='bg-emerald-400 text-white p-12'>
    <div className='container mx-auto flex flex-col justify-center content-center text-center p-12'>
      <div className='p-6  flex justify-center'> 
        <img src={img} width={200} alt=''/>

      </div>
     <div>
      <h1 className='text-4xl font-bold p-4'>start Framework</h1>
      <p className='text-slate-200 font-thin p-4'>Graphic Artist - Web Designer - Illustrator</p>
     </div>


    </div>

   </div>
  
  </>
}
