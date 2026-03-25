import React, { use, useState } from 'react'
import AvailablePlayer from '../../availablePlayers/AvailablePlayer';
AvailablePlayer
const Player = ({players,coin,setCoin}) => {
    const result = use(players)
    const [selectedPlayer,setSelectedPlayer] = useState([]);
    
  return (
    <div  >
      <AvailablePlayer setSelectedPlayer={setSelectedPlayer} selectedPlayer={selectedPlayer}  coin={coin} setCoin={setCoin} result={result}/>
    </div>
  )
}

export default Player