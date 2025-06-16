import Image from 'next/image'
import React from 'react'
// import { LuAudioLines } from "react-icons/lu";
import { DynamicLogo } from './DynamicLogo';


export const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-200px)] min-h[400px] overflow-hidden'>
        <Image
            src='/RockFest banner.jpg'
            alt='Rock fest banner'
            fill
            className='object-contain object-center -z-10'
            priority
        />
        <div className='bg-white/30 py-3 px-4 rounded-xl text-center backdrop-blur-md'>
          {/* <div className='relative flex items-center justify-center'>
            <LuAudioLines size={100} color='#FA3086'/>
          </div> */}
          <div className='relative flex items-center justify-center' >
            <DynamicLogo/>
          </div>
          <div className='text-5xl font-bold'>
            <p className='text-black' >Playlist</p>
          </div>
        </div>
        <div className='bg-white/60 font-bold text-sm mt-3 text-black/80' >
          Keep me updated with the news and promotions
        </div>
        <div className='mt-3 flex gap-2'>
          <input
            type='email'
            placeholder='Email'
            className='rounded-sm border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-600 placeholder-zinc-500 caret-pink-500 outline-pink-500'
          />
          <button className='cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-950 hover:shadow-lg hover:shadow-black/20' type='submit' >
            Subscribe
          </button>

        </div>

    </div>
  )
}
