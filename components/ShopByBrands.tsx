import React from 'react'
import Link from 'next/link'
import { getAllBrands } from '@/sanity/queries'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { extraData } from '@/constants/data'

const OtherInfo = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-shop_light_red/20 py-5'>
            {extraData.map((item, index) => (
                <div key={index} className='flex items-center gap-3 group text-lightColor hover:text-shop_light_red'>
                    <span className='inline-flex scale-100 group-hover:scale-90 hoverEffect'>{item.icon}</span>
                    <div className='text-sm'>
                        <p className='text-darkColor/80 font-bold capitalize'>{item.title}</p>
                        <p className='text-lightColor'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const ShopByBrands = async() => {
    const brands = await getAllBrands()
  return (
    <div className='mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md'>
        <div className='flex items-center gap-5 justify-between mb-10'>
            <h2 className='text-2xl font-semibold text-shop_dark_red'>Shop By Brands</h2> {/* it should be Shop By Bands*/}
            <Link href={'/shop'} className='text-sm font-semibold tracking-wide hover:text-shop_dark_red hoverEffect'>
                View all
            </Link>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2.5'>
            {brands.map((brand) => (
                <Link key={brand.title} href={`/brand/${brand.slug?.current}`} className='bg-white w-34 h-24 flex items-center justify-center rounded-mg overflow-hidden hover:shadow-lg shadow-shop_dark_red/20 hoverEffect'>
                    {brand.image && <Image src={urlFor(brand.image).url()} alt='brandImage' width={250} height={250} className='w-32 h-20 object-contain' />}
                </Link>
            ))}
        </div>
        {OtherInfo()}
    </div>
  )
}

export default ShopByBrands
