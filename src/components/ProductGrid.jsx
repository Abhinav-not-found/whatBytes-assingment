import React from 'react'
import ProductCard from './ProductCard'

export const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    rating: 4.5,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61MT0M1_5XL._AC_SX679_.jpg",
    alt: "Wireless Headphones product image",
  },
  {
    id: 2,
    title: "Stylish Backpack",
    price: 39.99,
    rating: 4.2,
    category: "Accessories",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    alt: "Stylish Backpack product image",
  },
  {
    id: 3,
    title: "Analog Men's Watch",
    price: 89.99,
    rating: 4.8,
    category: "Fashion",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    alt: "Analog Men's Watch product image",
  },
  {
    id: 4,
    title: "Gaming Mouse",
    price: 24.99,
    rating: 4.3,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    alt: "Gaming Mouse product image",
  },
  {
    id: 5,
    title: "Casual T-Shirt",
    price: 14.99,
    rating: 4.0,
    category: "Fashion",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    alt: "Casual T-Shirt product image",
  },
];


const ProductGrid = () => {
  return (
    <div>
      <div className='grid grid-cols-3 auto-rows-max gap-y-5'>
        {products.map((product)=>{
          return <ProductCard key={product.id} data={product}/>
        })}
      </div>
      
    </div>
  )
}

export default ProductGrid
