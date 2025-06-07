"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProductCard = ({ data }) => {
  const router = useRouter();

  const handleAddToCart = (id) => {
    console.log("cart");
  };

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className='p-8 bg-white w-72 rounded-xl cursor-pointer flex flex-col items-center'
    >
      <div className='w-auto h-36'>
        <img
          src={data.image}
          width={150}
          height={150}
          alt={data.alt}
          style={{ height: "auto", width: "110px" }}
        />
      </div>
      <p className='mt-4'>{data.title}</p>
      <p className='text-xl font-semibold'>${data.price}</p>
      <Button
        onClick={(e) => {
          handleAddToCart(data.id);
          e.stopPropagation();
        }}
        className={"bg-primary mt-4"}
      >
        Add to Cart
      </Button>
      {/* <p>star rating(optional)</p> */}
    </div>
  );
};

export default ProductCard;
