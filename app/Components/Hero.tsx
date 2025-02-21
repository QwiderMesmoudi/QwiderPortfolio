"use client"
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {
    words: string[];
    role : string;
    image: string;
}

const Hero = ({role,image,words}: Props) => {
    const [text,count]=useTypewriter({
       
        words:words,
        loop:true,
        delaySpeed:3000
    })
    return (
    <div className='h-screen flex flex-col items-center text-center   mt-16'>
        <BackgroundCircles/>
        <img src={image} alt='' className='w-64 h-64 rounded-full object-cover mb-5'
           /> 
        <div className='z-10'>
           
           <h2 className='tracking-[15px] text-gray-600 mb-5 text-3xl font-semibold'>
            {role}
            </h2> 
        <h1 className='text-5xl font-semibold text-center max-w-[800px] '>
        <span className="capitalize">{text}</span>

            <Cursor />
        </h1>
        <div className='flex pt-10 '>
            <button className='heroButton'>About</button>
            <button className='heroButton'>Experience</button>
            <button className='heroButton'>Projects</button>
            <button className='heroButton'>Services</button>
            <Link href={"#contact"}>
            <button className='heroButton'>Contact</button>
            </Link>
        </div>
        </div>
        
    </div>
  )
}

export default Hero