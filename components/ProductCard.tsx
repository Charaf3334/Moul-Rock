import { Product } from '@/sanity.types'
import { urlFor } from '@/sanity/lib/image'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, StarIcon } from 'lucide-react'
import AddToWishlistButton from './AddToWishlistButton'
import PriceView from './PriceView'
import AddToCartButton from './AddToCartButton'

const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className='text-sm border-[1px] border-dark_blue/20 rounde-md bg-white group'>
        <div className='relative group overflow-hidden bg-shop_light_bg'>
        <AddToWishlistButton product={product}/>
            {product?.images && <Image src={urlFor(product?.images[0]).url()} alt='ProductImage' loading='lazy' width={700} height={700} className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg hoverEffect ${product?.stock !== 0 ? 'group-hover:scale-105' : 'opacity-50'}`}/>}
        {product?.status === 'sale' && <p className='absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_red group-hover:text-shop_light_red hoverEffect'>Sale!</p>}
        {product?.status === 'new' && <p className='absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-shop_light_red group-hover:text-shop_light_red hoverEffect'>New!</p>}
        {product?.status === 'hot' && <Link 
            href={'/deal'}
            className='absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_red hoverEffect'
            >
                <Flame 
                    size={18}
                    fill='#fb6c08'
                    className='text-shop_orange/50 group-hover:text-shop_orange hoverEffect'
                />
        </Link> }
        </div>
        <div className='p-3'>
            {product?.categories && <p className='uppercase line-clamp-1 text-xs text-shop_light_text'>{product?.categories?.map((cat) => cat).join(', ')}</p>}
            <h2 className='text-sm line-clamp-1 font-bold text-shop_dark_red capitalize tracking-wide font-sans'>{product?.name}</h2>
            <div className='flex items-center gap-2'>
                <div className='flex item-center gap-0.4'>
                    {[...Array(5)].map((_,index) => (
                        <StarIcon size={13} key={index} className={index < 4 ? 'text-[#B8860B]' : 'text-[#D1D5DB]'}
                        fill={index < 4 ? '#FACC15' : 'transparent'}
                        />
                    ))}
                </div>
                <p className='text-shop_light_text text-xs tracking-wide'>5 Reviews</p>
            </div>
            <div className='flex items-center gap-2.5'>
                <p className='font-medium'>In Stock</p>
                <p className={`${product?.stock === 0 ? 'text-red-600' : 'text-shop_light_red font-semibold'}`}>{(product?.stock as number) > 0 ? product.stock : 'unavailable'}</p>
            </div>
            <PriceView price={product.price} discount={product.discount} className='text-sm'/>
            <AddToCartButton product={product} className='w-33 rounded-full'/>
        </div>
    </div>
  )
}

export default ProductCard