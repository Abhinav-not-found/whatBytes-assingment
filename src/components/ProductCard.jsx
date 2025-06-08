"use client";
import { useCart } from "@/context/cartContext";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

const ProductCard = ({ data }) => {
  const router = useRouter();
  const { cart, addToCart } = useCart();
  const isInCart = cart.some((item) => item.id === data.id);
  const handleAddToCart = (data) => {
    addToCart(data);
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
      {isInCart ? (
        <Button
          onClick={(e) => e.stopPropagation()}
          className={"bg-green-700 hover:bg-green-700 mt-4"}
        >
          <Check />
          Added
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            handleAddToCart(data);
            e.stopPropagation();
          }}
          className={"bg-primary mt-4"}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
