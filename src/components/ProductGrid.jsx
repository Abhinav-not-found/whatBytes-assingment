"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "@/productData";
import { useSearchParams } from "next/navigation";

const ProductGrid = () => {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const priceFilter = searchParams.get("price") || 100;

  const filtered = products.filter((product) => {
    const matchCategory =
      !categoryFilter || categoryFilter === "All"
        ? true
        : product.category.toLocaleLowerCase() ===
          categoryFilter.toLocaleLowerCase();

    const matchPrice = product.price <= priceFilter;
    return matchCategory && matchPrice;
  });

  if (filtered.length === 0) {
    return <p className='text-center text-xl'>No products found</p>;
  }
  return (
    <div className='h-fit'>
      {/* laptop view */}
      <h1 className='capitalize -mt-5 mb-2 hidden lg:block text-secondary'>
        Product listing
      </h1>
      {/* tablet view */}
      <p className='capitalize -mt-1 mb-4 hidden md:block lg:hidden text-5xl font-bold text-secondary'>
        Product listing
      </p>
      {/* mobile view */}
      <p className='capitalize -mt-1 mb-4  text-4xl text-center md:text-left md:hidden font-bold text-secondary'>
        Product listing
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  auto-rows-max gap-y-10 gap-x-10'>
        {filtered.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
