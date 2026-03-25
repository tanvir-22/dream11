import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#061329] w-full h-[60vh] pt-15 '>
        <div className='flex md:flex-row flex-col  py-5  items-center w-11/12 md:w-285  mx-auto'>
            <div className='flex-1'>
                <h1 className='md:text-5xl text-2xl md:text-left text-center font-bold'>Assemble Your Ultimate <span className='[-webkit-text-stroke-width:1.5px] [-webkit-text-stroke-color:#5f3afc] text-transparent'>Dream 11</span>  Cricket Team</h1>
                <p className='pt-3 md:text-[19px]  md:text-left text-center text-[#828282] '>Build your perfect Dream 11 squad by selecting top players, balancing skills, and strategizing for victory.
Create a winning team lineup and compete like a champion every match!</p>
                <div className='flex md:flex-row flex-col gap-5 pt-4 w-[70%] mx-auto md:mx-0'>

                    <button className='cursor-pointer px-6 py-3 border border-transparent hover:border-[#5e3afc] hover:bg-transparent transition-all duration-500 ease-in-out font-semibold bg-[#5e3afc] rounded-md'>Explore</button>
                <button className='cursor-pointer px-6 py-3 border font-semibold border-[#5e3afc] hover:bg-[#5e3afc] transition-all duration-500 ease-in-out rounded-md'>Claim Credit</button>
                </div>
            </div>
            <div className='md:w-[30vw] md:h-[50vh] mt-3 w-[90%]'>
                <img className='w-full h-full rounded-md object-cover' src="https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Banner