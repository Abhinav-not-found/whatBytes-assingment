import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/productData'

const ProductGrid = () => {
  if(!products || products.length === 0){
    return (
      <p className='text-center text-xl'>No products found</p>
    )
  }
  // const filterProducts = products.filter((p)=>p.title.includes('Headphones'))
  // console.log(filterProducts)
  return (
    <div className='h-fit'>
      <div className='grid grid-cols-3 auto-rows-max gap-y-10'>
        {products.map((product)=>{
          return <ProductCard key={product.id} data={product}/>
        })}
      </div>
      
    </div>
  )
}

export default ProductGrid
