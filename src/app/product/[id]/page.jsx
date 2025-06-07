"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import { products } from "@/productData";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail]=useState(null)
  const productId = Number(id)

  useEffect(() =>{
      setProductDetail(products.find((p)=>p.id === productId))
  }, [])
 
  if(productDetail === null){
    return <>Product not found</>
  }

  return (
    <div className='flex flex-col md:flex-row px-6 md:px-20 py-10 gap-10'>
      <div className='w-full md:w-1/2 flex justify-center items-center bg-white p-8 rounded-xl shadow-md'>
        <img
          src={productDetail.image}
          alt='Product Image'
          width={400}
          height={400}
          className='rounded-lg object-contain'
        />
      </div>

      <div className='w-full md:w-1/2 space-y-6 p-8'>
        <p className='text-4xl font-bold text-gray-800'>{productDetail.title}</p>
        <p className='text-2xl text-green-600 font-semibold'>${productDetail.price}</p>
        <p className='text-gray-700'>
          {productDetail.description}
        </p>
        <p className='text-sm text-gray-500'>Category: {productDetail.category}</p>

        <div className='flex items-center gap-4'>
          <span className='font-medium text-gray-800'>Quantity:</span>
          <div className='flex items-center gap-2'>
            <button className='px-3 py-1 bg-gray-300 rounded'>-</button>
            <span>1</span>
            <button className='px-3 py-1 bg-gray-300 rounded'>+</button>
          </div>
        </div>

        <button className='mt-4 flex gap-2 items-center p-4 px-8 cursor-pointer bg-primary rounded-lg text-lg hover:bg-secondary'>
          <ShoppingCart className='size-5' />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
