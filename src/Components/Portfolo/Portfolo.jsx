import React, { useState } from 'react'
import style from './Portfolo.module.css'
import img1 from '../../assets/image/react.project11.png'
import img2 from '../../assets/image/react.project12.png'
import img3 from '../../assets/image/react.project13.png'
export default function Portfolo() {
  return <>
  <div className='p-12'>
    <div className='container mx-auto p-12 flex flex-col justify-center content-center text-center'>
      <h1 className='text-cyan-950 p-7 text-4xl font-bold '>Portfolio Component</h1>
      <div className='container pt-5 flex flex-wrap'>
        <div className='w-1/3 px-2 py-2 '>
        <img src={img1} width={300} className='rounded-lg ' alt=''/>
        </div>
        <div className='w-1/3 px-2 py-2 '>
        <img src={img2} width={300} className='rounded-lg ' alt=''/>
        </div>
        <div className='w-1/3 px-2 py-2 '>
        <img src={img3} width={300} className='rounded-lg ' alt=''/>
        </div>
        <div className='w-1/3 px-2 py-2 '>
        <img src={img1} width={300} className='rounded-lg ' alt=''/>
        </div>
        <div className='w-1/3 px-2 py-2 '>
        <img src={img2} width={300} className='rounded-lg ' alt=''/>
        </div>
        <div className='w-1/3 px-2 py-2 '>
        <img src={img3} width={300} className='rounded-lg ' alt=''/>
        </div>
      </div>
    </div>
  </div>
  </>
}
