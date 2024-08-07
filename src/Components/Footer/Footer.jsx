import React, { useState } from 'react'
import style from './Footer.module.css'

export default function Footer() {
   

  return <>
  
   <div className='bg-cyan-900 text-slate-50 buttom-0 left-0 right-0 p-7'>
    <div className='container flex flex-wrap items-center justify-between mx-auto p-8 text-center'>
      <div className='text-center w-1/3'>
        <h3 className='font-bold text-1xl'>LOCATION</h3>
        <p className='font-light text-current'>2215 John Daniel Drive</p>
        <p className='font-light text-current'>Clark, MO 65243</p>
      </div>
      <div className='text-center w-1/3'>
        <h3 className='font-bold text-1xl'>AROUND THE WEB</h3>
      
        <ul className='flex justify-center'>
          <li className='space-x-2'>
            <i className='fab fa-facebook-f border border-inherit border-solid rounded-full p-1'></i>
            <i className='fab fa-twitter border border-inherit border-solid rounded-full p-1'></i>
            <i className='fab fa-linkedin-in border border-inherit border-solid rounded-full p-1'></i>
            <i className='fab fa-google border border-inherit border-solid rounded-full p-1'></i>
            
          </li>
        </ul>
        
      </div>
      <div className='text-center w-1/3'>
        <h3 className='font-bold text-1xl'>ABOUT FREELANCER</h3>
        <p className='font-light text-current'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>

    </div>

   </div>
   <diV className='bg-gray-900  text-center'>
    <div className='container mx-auto p-3'>
    <p className='text-slate-200 font-thin'>Copyright © Your Website 2021</p>
    </div>

   </diV>
  </>
}
