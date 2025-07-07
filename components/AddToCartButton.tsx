'use client'
import { Product } from '@/sanity.types'
import React from 'react'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Props {
    product: Product
    className?: string
}

const AddToCartButton = ({product, className}: Props) => {
    const isOutOfStock = product?.stock === 0
    const handleAddToCart = () => {
        window.alert("test") //remove later
    }
  return (
    <div>
        <Button onClick={handleAddToCart} disabled={isOutOfStock} className={cn('w-full mt-2 bg-shop_dark_red/80 text-shop_light_bg shadow-none border border-shop_dark_red/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_red hover:border-shop_dark_red hoverEffect', className)} >
            <ShoppingBag /> {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </Button>
    </div>
  )
}

export default AddToCartButton