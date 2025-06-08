"use client";
import React, { useEffect, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";
import { products } from "@/productData";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const productId = Number(id);
  const { cart, addToCart } = useCart();
  const isInCart = cart.some((item)=>item.id === productDetail.id)

  const handleAddToCart = (data) => {
    addToCart(data);
  };

  useEffect(() => {
    setProductDetail(products.find((p) => p.id === productId));
  }, []);

  if (productDetail === null) {
    return <div className="h-screen">
      <h1 className="text-center mt-20">Product not found</h1>
    </div>;
  }

  return (
    <div className='flex bg-stone-100 flex-col md:flex-row px-6 md:px-10 lg:px-20 py-10 gap-10 h-screen'>
      <div className=' size-[20rem] md:size-[25rem] md:w-1/2 flex justify-center items-center p-8 bg-white rounded-xl shadow-md'>
        <img
          src={productDetail.image}
          alt='Product Image'
          width={250}
          height={250}
          className='rounded-lg object-contain'
        />
      </div>

      <div className='w-full md:w-1/2 space-y-6 p-8'>
        <p className='text-4xl font-bold -mt-10 md:-mt-5 lg:mt-0 text-gray-800'>
          {productDetail.title}
        </p>
        <p className='text-2xl text-green-600 font-semibold'>
          ${productDetail.price}
        </p>
        <p className='text-gray-700'>{productDetail.description}</p>
        <p className='text-sm'>Category: {productDetail.category}</p>
        {isInCart ? (
          <button
            onClick={(e) => e.stopPropagation()}
            className={"bg-green-700 text-white hover:bg-green-700 mt-4 flex gap-2 items-center p-4 px-8 cursor-pointer rounded-lg text-lg"}
          >
            <Check />
            Added
          </button>
        ) : (
          <button
            onClick={() => handleAddToCart(productDetail)}
            className='mt-4 flex gap-2 items-center p-4 px-8 cursor-pointer bg-primary rounded-lg text-lg hover:bg-secondary'
          >
            <ShoppingCart className='size-5' />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
