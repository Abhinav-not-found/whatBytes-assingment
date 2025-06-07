"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ProductCard = ({ data }) => {
  const [arrayOfNumber, setArrayOfNumber] = useState([]);

  const handleAddToCart = (id) => {
    setArrayOfNumber((prev) => [...prev, id]);
  };

  console.log(arrayOfNumber);

  return (
    <div className='p-8 bg-white w-80 rounded-xl'>
      <div className='w-[100px] h-auto'>
        <img
          src={data.image}
          width={160}
          height={160}
          alt={data.alt}
          style={{ height: "100px", width: "100px" }}
        />
      </div>
      <p className='mt-4'>{data.title}</p>
      <p className='text-xl font-semibold'>${data.price}</p>
      <Button
        onClick={() => handleAddToCart(data.id)}
        className={"bg-primary mt-4"}
      >
        Add to Cart
      </Button>
      {/* <p>star rating(optional)</p> */}
    </div>
  );
};

export default ProductCard;
