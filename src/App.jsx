import React, { Suspense, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/homepage/banner/Banner'
import Player from './components/homepage/player/Player'
import Owner from './components/owner/Owner'
import News from './newsLetter/News'
import Footer from './components/footer/Footer'
import { Divide } from 'lucide-react'

const App = () => {
  const [coin,setCoin] = useState(50000)

  const fetchPlayers = async()=>{
    const res = await fetch('/player.json')
    return res.json()
  }
  const players = fetchPlayers();

  const fetchOwner = async()=>{
    const response = await fetch(`/owner.json`);
    return response.json();
  }
  const owner = fetchOwner();
  return (
  
    <>
          <Navbar coin={coin}/>
      <Banner/>
     <Suspense fallback={<div className='bg-[#051124] md:flex md:justify-center md:pb-10'><span className=" items-center loading loading-spinner text-primary"></span></div>}>
    <Player coin={coin} setCoin={setCoin} players={players}/>
     </Suspense>
   <Suspense fallback={<div className='bg-[#051124] flex justify-center'><span>Loading...</span></div>}>
      <Owner owner={owner}/>
   </Suspense>
   <News/>
   <Footer/>
    </>
  
 
  )
}

export default App