import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/productData'

const ProductGrid = () => {
  return (
    <div>
      <div className='grid grid-cols-3 auto-rows-max gap-y-10'>
        {products.map((product)=>{
          return <ProductCard key={product.id} data={product}/>
        })}
      </div>
      
    </div>
  )
}

export default ProductGrid
