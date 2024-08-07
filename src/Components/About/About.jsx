import React, { useState } from 'react'
import style from './About.module.css'

export default function About() {
   

  return <>
  <div className='bg-emerald-400 text-white p-12'>
    <div className='container mx-auto flex flex-col justify-center content-center text-center p-12'>
      <h1 className='text-4xl font-bold p-9'>About Component </h1>
      <div className='flex'>
        <div>
          <p className='text-sm p-8'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

        </div>
        <div>
          <p className='text-sm p-8'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

        </div>
      </div>
    </div>
  </div>
  
   
  
  </>
}
