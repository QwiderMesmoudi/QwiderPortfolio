"use client"
import React from 'react'
import {motion}  from "framer-motion"
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:['20%','20%','50%','80%','20%']
    }}
    transition={{
        duration:2.5
    }}
    

    className='relative flex items-center justify-center z-0'>
        <div className='h-[400px] w-[400px] rounded-full animate-ping-slow  absolute border border-gray-500 mt-96 z-0'/>
        
    
        
   
    </motion.div>
  )
}

export default BackgroundCircles