import React from 'react'
import PriceFormatter from './PriceFormatter'

interface Props {
    price: number | undefined
    discount: number | undefined
    className?: string
}

const PriceView = ({ price, discount, className }:Props) => {
  return (
        <div className='flex items-center gap-2'>
            <PriceFormatter amount={price} className='text-shop_dark_red'/>
            {price && discount && <PriceFormatter amount={price + (discount * price) / 100} className='line-through font-normal text-shop_light_text'/>}
        </div>
  )
}

export default PriceView