import React from 'react'

export const DynamicLogo = () => {
  return (
    <div className='flex items-center justify-center  mb-2'>
        <div className='rounded-full bg-pink-500 w-14 h-14 flex items-center justify-center gap-1'>
            <div className='h-2 w-1 bg-pink-300 animate-wavey' ></div>
            <div className='h-3 w-1 bg-pink-200 animate-wavey animation-delay-200' ></div>
            <div className='h-4 w-1 bg-pink-100 animate-wavey animation-delay-[150ms]'></div>
            <div className='h-3 w-1 bg-pink-200 animate-wavey animation-delay-300'></div>
            <div className='h-2 w-1 bg-pink-300 animate-wavey animation-delay-[75ms]'></div>
        </div>
    </div>
  )
}
