import React, { use } from 'react'

function Owner({ owner }) {
    const result = use(owner);
    console.log(result);
    return (
        <div className='bg-[#051124] '>
            <h1 className='md:w-285 mx-auto font-bold text-2xl py-3 text-center'>Top Owners</h1>
            <div className='md:w-285 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center'>
                {

                    result.map(item => {
                        return <div className="card w-83 h-30 bg-[#001945] card-xs shadow-sm p-3">
                            <div className="flex gap-3 items-center justify-center">
                                <div className="w-20 h-20">
                                    <img className='rounded-full w-full h-full object-cover' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-xl">{item.name}</h2>
                                    <p className='text-[#868686] font-semibold'>Total spent: ${item.totalSpent}</p>
                                </div>

                            </div>
                        </div>
                    })
                }


            </div>


        </div>

    )
}

export default Owner