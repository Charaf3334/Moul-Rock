import React from 'react'
import Image from 'next/image'
import kurtCobain from '../images/banner/banner.png'
import Link from 'next/link'

const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8'>
      <div className='max-w-xl'>
        <h1 className='text-4xl font-extrabold text-shop_dark_red'>
          Wear The Noise.
        </h1>
        <p className='mt-4 text-lg text-gray-700 font-medium'>
          Not just tees — a rebellion stitched in every thread. Inspired by icons like Kurt Cobain.
        </p>
        <Link 
          href={'/shop'} 
          className='inline-block mt-6 bg-shop_dark_red/90 text-white/90 px-5 py-2 rounded-md text-sm hover:bg-shop_dark_red transition'
        >
          Buy Now
        </Link>
      </div>
      <div className='w-full md:w-auto'>
        <Image 
          src={kurtCobain} 
          alt='Kurt Cobain' 
          className='rounded-xl shadow-lg max-w-xs' 
        />
      </div>
    </div>
  )
}

export default HomeBanner
