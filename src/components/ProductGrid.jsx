'use client'
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/productData'
import { useSearchParams } from 'next/navigation'

const ProductGrid = () => {
  const searParams = useSearchParams();
  const categoryFilter = searParams.get('category')

  const filtered = products.filter((product)=>{
    if(!categoryFilter || categoryFilter === 'All') return true;
    return product.category.toLocaleLowerCase() === categoryFilter.toLocaleLowerCase();
  })



  if(filtered.length === 0){
    return (
      <p className='text-center text-xl'>No products found</p>
    )
  }
  return (
    <div className='h-fit'>
      <div className='grid grid-cols-3 auto-rows-max gap-y-10'>
        {filtered.map((product)=>{
          return <ProductCard key={product.id} data={product}/>
        })}
      </div>
      
    </div>
  )
}

export default ProductGrid
