'use client'
import React from 'react'
import ProductCard from './ProductCard'
import { products } from '@/productData'
import { useSearchParams } from 'next/navigation'

const ProductGrid = () => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category')
  const priceFilter = searchParams.get('price') || 100;

  const filtered = products.filter((product)=>{
    const matchCategory = 
    !categoryFilter || categoryFilter === 'All' ? true :
    product.category.toLocaleLowerCase() === categoryFilter.toLocaleLowerCase()

    const matchPrice = product.price <= priceFilter
    return matchCategory && matchPrice
  })

  if(filtered.length === 0){
    return (
      <p className='text-center text-xl'>No products found</p>
    )
  }
  return (
    <div className='h-fit'>
      <h1 className='capitalize -mt-5 mb-2 text-secondary'>Product listing</h1>
      <div className='grid grid-cols-3 auto-rows-max gap-y-10'>
        {filtered.map((product)=>{
          return <ProductCard key={product.id} data={product}/>
        })}
      </div>
      
    </div>
  )
}

export default ProductGrid
