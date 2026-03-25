import React, { useState } from 'react'
import { User } from 'lucide-react';
import { Flag } from 'lucide-react';
import { toast } from 'react-toastify';
export default function Card({ item, coin, setCoin, selectedPlayer, setSelectedPlayer }) {
    const isSelected = selectedPlayer.some(
        (player) => player.playername === item.playername
    );
    const handleChooseBtn = () => {

        let balance = coin - item.price
        if (balance >= 0) {
            setCoin(balance)
            toast.success(`${item.playername} is selected`)
            setSelectedPlayer([...selectedPlayer, item])
        }
        else {
            toast.error(`Not Enough Coin`)
            return
        }

    }
    return (
        <div className="card bg-[#001945] w-80 shadow-sm">
            <div className='flex justify-center pt-3'>
                <figure className='w-35 h-35 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover object-top'
                        src={item.playerimage}
                        alt="player" />
                </figure>
            </div>
            <div className="card-body ">
                <h2 className="card-title"> <User />{item.playername}</h2>
                <div className='flex text-xs items-center justify-between mt-3'>
                    <div className='flex items-center gap-2'>
                        <Flag />
                        <p>{item.playercountry}</p>
                    </div>
                    <div>
                        <p className='px-3 py-1 border rounded-md text-xs  '>{item.playertype}</p>
                    </div>
                </div>
                <div className='divider'></div>
                <div className='flex justify-between w-full'>
                    <p>Rating</p>
                    <h2>{item.rating}</h2>
                </div>
                <div className='flex justify-between w-full'>
                    {item.playertype == 'Batsman' ? <><p>Bating style</p><h2>{item.battingstyle}</h2></> : <><p>Bowling style</p><h2>{item.bowlingstyle}</h2></>}
                </div>
                <div className='flex  justify-between w-full items-center'>
                    <div className='flex gap-1 text-[#5e3afc] font-semibold'>
                        <p>Price: </p>
                        <p>${item.price}</p>
                    </div>
                    <div>
                        <button type='button' disabled={isSelected} onClick={handleChooseBtn} className={`px-2 py-1 border border-transparent ${isSelected ? '' : 'hover:cursor-pointer hover:border-[#5e3afc] hover:bg-transparent transition-all duration-500 ease-in-out'} font-semibold bg-[#5e3afc] rounded-md`}>
                            {isSelected == true ? 'Selected' : 'Choose player'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
