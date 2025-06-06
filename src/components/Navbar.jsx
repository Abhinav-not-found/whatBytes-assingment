import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <header className='flex justify-between bg-[#0655A5] text-white p-4'>
      <div>
        <p className='font-semibold text-2xl'>Logo</p>
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
        <Button className={"flex gap-2 bg-[#002859]"}>
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
