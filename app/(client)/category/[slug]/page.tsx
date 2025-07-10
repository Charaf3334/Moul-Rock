import { getCategories } from '@/sanity/queries'
import React from 'react'
import Container from '@/components/Container'

const CategoryPage = async() => {
  const categories = await getCategories(0)

  return (
    <div className='py-10 '>
      <Container>
        <h2 className='text-2xl font-semibold text-shop_dark_red'>Products by Category:</h2>
      </Container>
    </div>
  )
}

export default CategoryPage