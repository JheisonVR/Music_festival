'use client'
//import Image from 'next/image
import React, { useRef } from 'react'
import { PiLessThan, PiGreaterThan  } from "react-icons/pi";



const items = [
    {
        url:'./bobMarleySigning.jpg',
        artistName:'Bob Marley',
        schedule:'1st July 9pm',
        stage:'Main stage'
    },
    {
        url:'./Aerosmith.jpg',
        artistName:'Aeroshmith',
        schedule:'1st July 11pm',
        stage:'Main stage'
    },
        {
        url:'./C-Adrian-Boot-3.jpg',
        artistName:'The Clash',
        schedule:'2nd July 9pm',
        stage:'Main stage'
    },
    {
        url:'./Guns-N-Roses.jpg',
        artistName:'Guns\'n Roses',
        schedule:'2nd July 11pm',
        stage:'Main stage'
    },
    {
        url:'./Alice_Cooper.jpg',
        artistName:'Alice Cooper',
        schedule:'3th July 9pm',
        stage:'Main stage'
    },
    {
        url:'./Bunbury.jpg',
        artistName:'Bunbury',
        schedule:'3th July 11pm',
        stage:'Main stage'
    },
        {
        url:'./Soda-Stereo.jpg',
        artistName:'Soda Stereo',
        schedule:'4th July 10pm',
        stage:'Main stage'
    },
    
]

export const Headers = () => {

    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollCarousel = (direction: 'left' | 'right') => {
        const carousel = carouselRef.current;
        if (carousel) {
            const firstItem = carousel.getElementsByTagName("div")[0];
            const itemWidth = firstItem?.clientWidth || 0;
            if (direction === 'left') {
                carousel.scrollLeft -= itemWidth;
            } else {
                carousel.scrollLeft += itemWidth;
            }
        }
    };

  return (
    <div className='max-w-screen-lg mx-auto mt-20'>
        <h2 className='mb-2'>
            Headliners
        </h2>
        <h6 className='font-light'>
            Experience the sonic delight  from these made-up artists across 7 days
            that music fans are calling one of the many gips that will happen this year.
        </h6>
        <div className='flex'>
            <button
                type='button'
                className='text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8'
                onClick={()=> scrollCarousel('left')}
                aria-label='Previous'

            >
                <PiLessThan className='hover:border hover:border-dashed  rounded-full' />
            </button>
            <div 
                ref={carouselRef} 
                className='mt-4 flex w-full snap-x gap-4 overflow-x-auto pb-5 scroll-smooth hide-scrollbar '>
            {
                items.map((band, index)=>(
                    <div key={index} className='min-w-[80%] md:min-w-[40%]'>
                        <div style={{ backgroundImage: `url(${band.url})`}} className='h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20'></div>
                        <h5 className='mt-2'>{band.artistName}</h5>
                        <h6>{band.schedule} - {band.stage}</h6>                
                    </div>
                ))
            }
            </div>
            <button 
                type='button'
                className='text-5xl flex justify-center items-center cursor-pointer p-2 relative -top-8'
                onClick={()=> scrollCarousel('right')}
                aria-label='Next'
            >
                <PiGreaterThan  className='hover:border hover:border-dashed  rounded-full' />
            </button>
        </div>
    </div>
  )
}
