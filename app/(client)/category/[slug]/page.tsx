import { getCategories } from '@/sanity/queries'
import React from 'react'
import Container from '@/components/Container'
import CategoryProducts from '@/components/CategoryProducts'

const CategoryPage = async({params}:{params: Promise<{slug: string}>}) => {
  const categories = await getCategories(0)
  const { slug } = await params
  return (
    <div className='py-10 '>
      <Container>
        <h2 className='text-2xl font-semibold text-shop_dark_red'>Products by Category:{" "} <span className='font-bold text-shop_light_red capitalize tracking-wide'>{slug && slug}</span></h2>
      <CategoryProducts categories={categories} slug={slug}/>
      </Container>
    </div>
  )
}

export default CategoryPage