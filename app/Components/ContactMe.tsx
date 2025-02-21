import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface Props {
    phone: string;
    email: string;
}

const ContactMe = ({email,phone}: Props) => {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row mx-auto items-center max-w-7xl  justify-evenly'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-4xl '>Contact</h3>
            <div className='flex flex-col space-y-10'>
            <div className='space-y-5 mt-20'>
                <div className='flex space-x-5 items-center'>
                    <PhoneIcon className='h-11 animate-pulse'/>
                    <p className='text-2xl'>{phone}</p>
                </div>

                <div className='flex space-x-5 items-center'>
                    <EnvelopeIcon className='h-11 animate-pulse'/>
                    <p className='text-2xl'>{email}</p>
                </div>

                <div className='flex space-x-5 items-center'>
                    <MapPinIcon className='h-11 animate-pulse'/>
                    <p className='text-2xl'>Chetoune - Tlemcen -Algeria </p>
                </div>
                
            </div>
            <form className='flex flex-col space-y-4 w-fit mx-auto'>
                <div className='space-x-2'>
                    <input type='text' className='contactInput' placeholder='Name'/>
                    <input type='email' className='contactInput' placeholder='Email'/>
                </div>
                <input type='text' className='contactInput' placeholder='Subject'/>
                <textarea placeholder='Message' className='contactInput'/>
                <button className='bg-[#F7AB0A]/70 contactInput rounded-md'>Submit</button>
            </form>
            </div>         
               
        </div>
    )
}

export default ContactMe
