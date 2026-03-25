import React, { useState } from 'react'
import Card from '../card/Card'
import Selectedplayer from '../selectedPlayer/Selectedplayer'

export default function AvailablePlayer({ result, coin, setCoin, selectedPlayer, setSelectedPlayer }) {
    const [available, setAvailable] = useState('available')
    const length = selectedPlayer.length
    return (
        <div className=' bg-[#051124] py-15 md:pt-10 pt-50'>
            <div className='md:w-285 w-11/12 mx-auto flex md:flex-row flex-col-reverse items-center md:items-start  md:justify-between'>
                <h1 className='font-bold md:text-xl pt-5 '>
                    {available == 'available' ? "Available Players" : `Selected Players ${length}/9`}
                </h1>
                <div className='flex w-1/2 md:w-auto  md:gap-0  border border-[#868686] rounded'>
                    <button onClick={() => setAvailable('available')} className={`cursor-pointer md:px-3 py-2  ${available == 'available' ? "bg-[#E7FE29] text-black" : ""} w-full rounded-r-none`}>Available</button>
                    <button onClick={() => setAvailable('selected')} className={ `cursor-pointer md:px-3 py-2  ${available == 'selected' ? "bg-[#E7FE29] text-black" : ""} w-full rounded-l-none`}>Selected</button>
                </div>
            </div>

            <div className={`w-11/12 md:w-285  mx-auto mt-8 ${available == 'available' ? ' grid md:grid-cols-3 grid-cols-1  gap-5 place-items-center' : ''}`}>
                {
                    available == 'available' ? result.map(item => {
                        return <Card setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} coin={coin} setCoin={setCoin} item={item} />
                    }) : <Selectedplayer setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer} coin={coin} setCoin={setCoin} />
                }
            </div>
        </div>
    )
}
