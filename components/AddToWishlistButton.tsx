import { Product } from '@/sanity.types'
import React from 'react'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

const AddToWishlistButton = ({ product, className }: { product: Product; className?: string }) => {
  return (
    <div className={cn('absolute top-2 right-2 z-10', className)}>
        <button className='p-2.5 rounded-full hover:bg-shop_dark_red hover:text-white hoverEffect bg-shop_lighter_bg'>
            <Heart size={15}/>
        </button>
    </div>
  )
}

export default AddToWishlistButton