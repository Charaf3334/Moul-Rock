import { sanityFetch } from "../lib/live"
import { BRANDS_QUERY, LATEST_BLOG_QUERY, DEAL_PRODUCTS } from "./query"

const getCategories = async ({ quantity }: { quantity?: number }) => {
    try {
        const query = quantity
        ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
            ...,
            'productCount': count(*[_type == 'product' && references(^._id)])
        }`
        : `*[_type == 'category'] | order(name asc) {
            ...,
            'productCount': count(*[_type == 'product' && references(^._id)])
        }`
        const {data} = await sanityFetch({query, params: quantity ? { quantity } : {}})
        return data
    } catch(error) {
        console.log('Error fetching categories', error)
        return []
    }
}

const getAllBrands = async () => {
    try {
        const { data } = await sanityFetch( {query: BRANDS_QUERY} )
        return data ?? []
    }
    catch (error) {
        console.log('Error fetching all brands:', error); {/* remove brands and put bands */}
        return []
    }
}

const getLatestBlogs = async () => {
    try {
        const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY })
        return data ?? []
    }
    catch (error) {
        console.log('Error fetching latest blogs:', error)
        return []
    }

}
const getDealProducts = async () => {
    try {
        const { data } = await sanityFetch({ query: DEAL_PRODUCTS })
        return data ?? []
    }
    catch (error) {
        console.log('Error fetching hot deal products:', error)
        return []
    }
}

export { getCategories, getAllBrands, getLatestBlogs, getDealProducts }