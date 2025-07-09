import React from 'react'
import { getDealProducts } from '@/sanity/queries'
import Container from '@/components/Container'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const DealPage = async() => {
    const products = await getDealProducts()
  return (
    <div className='py-10'>
        <Container>
            <h2 className='mb-5 underline underline-offset-4 decoration-[1px] text-base uppercase tracking-wide'>Hot Deals of the Week</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5'>
                {products.map((product) => (
                    // @ts-ignore
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </Container>
    </div>
  )
}

export default DealPage