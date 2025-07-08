import { sanityFetch } from "../lib/live"
import { BRANDS_QUERY } from "./query"

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

export { getCategories, getAllBrands }