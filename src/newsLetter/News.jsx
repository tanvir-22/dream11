import React from 'react'
import { Mail } from 'lucide-react';
export default function News() {
    return (
        <div className='bg-[#10111f] md:pb-6 pb-70'>
            <div className='pt-[80px] md:w-285 mx-auto flex md:flex-row flex-col  justify-between items-center p-3 h-[20vh]'>
                <div className='flex md:flex-row flex-col text-center md:text-left items-center gap-4     '>
                    <Mail className='w-20 h-20' />
                    <div>
                        <h1 className='font-bold text-2xl md:text-4xl'>
                        Newsletter</h1>
                    <p className='text-[#868686] text-[17px] md:text-xl'>Get the latest updates and news right in your inbox!</p>
                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-3 md:w-auto w-[85%]'>
                    <input placeholder='Enter your email' className=' px-4 py-4 bg-[#141626] font-bold' type="email" />
                    <button className='rounded-md px-4 py-4 bg-[#5e3afc] font-semibold'>Subscribe Now</button>
                </div>
            </div>

        </div>
    )
}
