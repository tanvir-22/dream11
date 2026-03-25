import React from 'react'
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Send } from 'lucide-react';
export default function Footer() {
  return (
    <div className='bg-[#051124] md:pt-20 pb-7 pt-10'>

    <div className=' md:w-285 mx-auto grid gap-2 grid-cols-1 md:grid-cols-3 place-items-center'>
    <div className='space-y-3 md:w-auto w-[75%]'>
        <h1 className='text-xl text-center'>Our Address</h1>
        <div className='divider  divider-primary  '></div>
        <div className='flex gap-4 items-center'><MapPin/> <h4>123 Main Street, New York,  United States</h4></div>
     <div className='flex gap-4   items-center'><Phone/>   <h4>+xx xxx xxxx</h4></div>
      <div className='flex gap-4  items-center'>   <Send /> <h4>info@company.com</h4></div>
    </div>
    <div className='space-y-3 md:w-[16vw] w-[75%] mx-auto text-center'>
        <h1 className='text-xl text-center'>About Us</h1>
        <div className='divider  divider-primary  '></div>
        <p>We are a passionate team dedicated to providing the best services to our customers.</p>
    </div>
     <div className='space-y-3 md:w-[16vw] w-[75%]'>
        <h1 className='text-xl text-center'>Quick Links</h1>
        <div className='divider  divider-primary  '></div>
        <ul className='flex flex-col items-center'>
            <li className='hover:text-[#5e3afc] hover:cursor-pointer'>Home</li>
            <li className='hover:text-[#5e3afc] hover:cursor-pointer'>Services</li>
            <li className='hover:text-[#5e3afc] hover:cursor-pointer'>About</li>
            <li className='hover:text-[#5e3afc] hover:cursor-pointer'>Contact</li>
        </ul>
    </div>
    
    </div>
        
    </div>
  )
}
