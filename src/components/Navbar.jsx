'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    <header className='flex justify-between bg-primary text-white py-4 px-20'>
      <div>
        <Link href={'/'} className='font-semibold text-2xl'>Logo</Link>
      </div>
      <div className='flex items-center gap-2 p-2 px-4 border border-white/50 rounded-lg'>
        <Search className='size-4' />
        <input
          type='text'
          placeholder='Search for products...'
          className='outline-none placeholder:text-white'
        />
      </div>
      <div className='flex gap-4'>
        <Button onClick={()=>router.push('/cart')} className={"flex gap-2 bg-secondary"}>
          <ShoppingCart />
          <p>Cart</p>
        </Button>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
          <AvatarImage src='https://github.com/shadcn.png' />
        </Avatar>
      </div>
    </header>
  );
};

export default Navbar;
