import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { productType } from './productType'
import { orderType } from './orderType'
import { brandTypes } from './brandTypes'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { authorType } from './authorType'
import { addressType } from './addressType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, blockContentType, productType, orderType, brandTypes, blogType, blogCategoryType, authorType, addressType],
}
