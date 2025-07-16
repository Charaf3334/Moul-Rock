"use client"
import React, { useEffect } from 'react'
import { Category } from '@/sanity.types'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button"
import { client } from '@/sanity/lib/client'
import { AnimatePresence, motion } from 'motion/react'
import { Loader2 } from 'lucide-react'
import NoProductAvailable from './NoProductAvailable'
import ProductCard from './ProductCard'
import { Product } from '@/sanity.types'

interface Props {
    categories: Category[]
    slug: string
}

const CategoryProducts = ({categories, slug}: Props) => {
    const [currentSlug, setCurrentSlug] = useState(slug)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleCategoryClick = (newSlug: string) => {
        if (newSlug === currentSlug)
            return
        setCurrentSlug(newSlug)
        router.push(`/category/${newSlug}`, { scroll: false })
    }

    const fetchProducts = async (categorySlug: string) => {
        setLoading(true);
        try 
        {
            const query = `
            *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
            ...,"categories": categories[]->title}
        `;
            const data = await client.fetch(query, { categorySlug });
            setProducts(data);
        } 
        catch (error) {
            console.error("Error fetching products:", error);
            setProducts([]);
        } 
        finally {
            setLoading(false);
        }
    };

  useEffect(() => {
    fetchProducts(currentSlug);
  }, [router]);

  return (
    <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
        <div className='flex flex-col md:min-w-40 border'>
            {categories?.map((category) => (
                <Button 
                onClick={() => handleCategoryClick(category.slug?.current as string)}
                key={category._id} 
                className={`bg-transparent border-0 p-0 rounded-none 
                text-darkColor shadow-none hover:bg-shop_light_red hover:text-white font-semibold hoverEffect capitalize transition-colors hoverEffect 
                ${category.slug?.current === currentSlug ? 'bg-shop_light_red text-white' : 'bg-transparent'}`}>
                    <p className='w-full text-left px-2'>{category.title}</p>
                </Button>
            ))}
        </div>
        <div className='flex-1'>
            {loading ? (
                <div className='flex flex-col items-center justify-center py-10 min-h-80 
                space-y-4 text-center bg-gray-100 rounded-lg w-full'>
                    <div className='flex items-center space-x-2 text-blue-600'>
                        <Loader2 className='w-5 h-5 animate-spin'/>
                        <span>Product is loading...</span>
                    </div>
                </div>
            ) : products.length > 0 ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5'>
                {products.map((product: Product) => (
                    <AnimatePresence key={product._id}>
                        <motion.div>
                            <ProductCard product={product}/>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div> ) : (
            <NoProductAvailable selectedTab={currentSlug} className='mt-0 w-full'/>)}
        </div>
    </div>
  )
}

export default CategoryProducts