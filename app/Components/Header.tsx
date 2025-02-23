"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"




const Header = () => {
    return (
<header className='my-2 max-w-7xl sticky top-0 flex justify-between items-start mx-auto z-20 p-5 '>
    <motion.div 
    initial={{
        x:-500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration:1.5
    }}
    className='flex items-center space-x-2'>
        <SocialIcon url="https://www.example.com" network='facebook' label="Our portfolio" />
        
        <SocialIcon url="https://www.example.com" network='linkedin' label="Our portfolio" />
        
        <SocialIcon url="https://www.example.com" network='youtube' label="Our portfolio" />
        
        <SocialIcon url="https://www.example.com" network='tiktok' label="Our portfolio" />
        
        <SocialIcon url="https://www.example.com" network='instagram' label="Our portfolio" />
        
        
    </motion.div>
    <motion.div 
    initial={{
        x:500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration:1.5
    }} className='space-x-2'>
        
    <SocialIcon url="https://www.example.com" network='email' label="Our portfolio" />
    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
    </motion.div>
</header> 
)
}

export default Header
