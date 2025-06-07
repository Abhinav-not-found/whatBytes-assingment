"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { products } from "@/productData";
import { Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Navbar = () => {
  const router = useRouter();
  const [focus, setFocus] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const filterProducts = products.filter(
    (p) => p.title.includes(searchInput) || p.description.includes(searchInput)
  );

  return (
    <header className='relative'>
      <nav className='flex justify-between bg-primary text-white py-4 px-20'>
        <div>
          <Link href={"/"} className='font-semibold text-2xl'>
            Logo
          </Link>
        </div>
        <div
          onClick={() => setFocus(true)}
          className='flex items-center gap-2 p-2 px-4 border border-white/50 rounded-lg'
        >
          <Search className='size-4' />
          <input
            readOnly
            type='text'
            placeholder='Search for products...'
            className='bg-transparent outline-none placeholder:text-white cursor-pointer'
          />
        </div>
        <div className='flex gap-4'>
          <Button
            onClick={() => router.push("/cart")}
            className={"flex gap-2 bg-secondary"}
          >
            <ShoppingCart />
            <p>Cart</p>
          </Button>
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
            <AvatarImage src='https://github.com/shadcn.png' />
          </Avatar>
        </div>
      </nav>


      {focus && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center p-10'>
          <div className='bg-white w-full max-w-3xl rounded-lg flex items-center gap-3 p-4 shadow-lg'>
            <Search className='text-gray-500' />
            <input
              autoFocus
              type='text'
              value={searchInput}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setFocus(false);
                  setSearchInput("");
                }
              }}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder='Search for products...'
              className='w-full outline-none text-gray-900 text-lg'
            />
            <button
              onClick={() => {
                setFocus(false);
                setSearchInput("");
              }}
              className='cursor-pointer'
            >
              <X />
            </button>
          </div>
          {searchInput.length > 0 &&
            (filterProducts.length === 0 ? (
              <>no products</>
            ) : (
              <div
                onClick={() => {
                  setFocus(false);
                  setSearchInput("");
                }}
                className='grid grid-cols-3 auto-rows-max gap-x-10 gap-y-10 mt-4'
              >
                {filterProducts.map((item) => {
                  return <ProductCard key={item.id} data={item} />;
                })}
              </div>
            ))}
        </div>
      )}


    </header>
  );
};

export default Navbar;
