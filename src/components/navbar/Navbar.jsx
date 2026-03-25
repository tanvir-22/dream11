import React, { useState } from 'react'
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { Receipt } from 'lucide-react';
import { Menu } from 'lucide-react';
import { CircleX } from 'lucide-react';
const Navbar = ({coin}) => {
  const [phone,setPhone] = useState(false)
  const handlemenu = ()=>{
    setPhone(!phone)

  }
  return (
   <div className='bg-[#051124] md:fixed top-0 left-0 md:w-full  mx-auto z-50 relative'>
     <div className="py-3  navbar flex md:justify-between items-center gap-x-13  shadow-sm  md:w-285 mx-auto">
  <div >
    <a className=" font-bold text-2xl">Dream 11    </a>
  </div>
    <div>
       
        <ul className={` hidden md:flex md:flex-row flex-col gap-5 font-semibold`}>
            <li><a className='hover:text-[#5e3afc]' href="">Home</a></li>
            <li><a className='hover:text-[#5e3afc]' href="">Explore</a></li>
            <li><a className='hover:text-[#5e3afc]' href="">Teams</a></li>
            <li><a className='hover:text-[#5e3afc]' href="">About</a></li>
            <li><a className='hover:text-[#5e3afc]' href="">Contact</a></li>
        </ul>
    </div>
    <div className='flex gap-6 '>
        <div className='hidden md:block p-3 cursor-pointer hover:bg-[#5e3afc] shadow-[0px_0px_10px_0px_#eeeeee63]'>
            <Search />
        </div>
        
        <div className='md:p-3 p-1.5 flex gap-1 cursor-pointer  shadow-[0px_0px_10px_0px_#eeeeee63]'>

            <Receipt/> <p> {coin}</p>
        </div>
        <div className='p-1.5'>
          {
            phone? <CircleX onClick={()=>setPhone(!phone)} className='md:hidden'/>: <Menu onClick={handlemenu} className='md:hidden'/> 
          }
        </div>
          
      
        
    </div>
</div>

 <ul   className={`md:hidden text-center absolute left-0 h-[20vh] w-full bg-[#051124] transition-all duration-500 ease-in-out 
  ${phone ? 'top-12 opacity-100' : '-top-40 opacity-0'}
  flex-col gap-5 font-semibold`}>
            <li><a href="">Home</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Teams</a></li>
            
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>


   </div>
  )
}

export default Navbar