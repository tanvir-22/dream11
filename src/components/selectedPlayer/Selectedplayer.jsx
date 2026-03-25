import React from 'react'
import { Trash } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
import { toast } from 'react-toastify';
export default function Selectedplayer({ selectedPlayer,setSelectedPlayer, coin,setCoin}) {
    const handleDeletebtn = (item)=>{
        let balance = coin+item.price;
        setCoin(balance)
        let filteredPlayer = selectedPlayer.filter(player=>player.playername!=item.playername);
        toast.success(`${item.playername} is removed`)
        setSelectedPlayer(filteredPlayer)
    }
    return (
        <div >
            {
                selectedPlayer.length>0? selectedPlayer.map(item=>{
                return <div className="mt-3 w-full flex items-center justify-between bg-[#001945]  shadow-sm py-3 px-9">
                <div className="flex gap-3 items-center justify-center">
                    <div className="w-20 h-20">
                        <img className='rounded-full w-full h-full object-cover' src={item.playerimage} alt="" />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">{item.playername}</h2>
                        <p className='text-[#868686]  font-semibold'> {item.playertype}</p>
                    </div>

                </div>
                <div className='bg-[#86868693] hover:bg-[#868686] cursor-pointer p-2 rounded-full'>
                    <Trash onClick={()=>handleDeletebtn(item)}/>
                </div>
            </div>
            }): <div className='flex flex-col justify-center items-center'>
                <CircleAlert className='w-20 h-20 text-blue-600'/>
                <h1 className='text-4xl font-bold text-center text-blue-600'>No player selected</h1>
                
            </div>
            }

        </div>
    )
}
