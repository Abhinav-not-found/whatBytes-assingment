"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [price, setPrice] = useState(100);

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  useEffect(() =>{
      const categoryFromURL = searchParams.get('category')
      const priceFromURL = searchParams.get('price')

      if(categoryFromURL) setSelectedCategory(categoryFromURL)
      if(priceFromURL) setPrice(Number(priceFromURL))

  }, [searchParams])

  const updateParams = (key, value )=>{
    const params = new URLSearchParams(searchParams.toString());
    if(value === 'All' || value === 100){
      params.delete(key)
    }else{
      params.set(key,value)
    }
    router.push("?"+params.toString())
  }

  const handleCategoryChange = (category)=>{
    setSelectedCategory(category)
    updateParams('category',category);
  }

  const handlePriceChange = (value) =>{
    setPrice(value)
    updateParams('price',value)
  }

  return (
    <div className="w-full h-auto bg-primary rounded-lg p-4 text-white">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <p className="font-semibold mb-2">Category</p>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
                className="size-5 border-none outline-none cursor-pointer"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2">Price: ₹{price}</p>
        <input
          type="range"
          min={0}
          max={100}
          value={price}
          onChange={(e) => handlePriceChange(e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
