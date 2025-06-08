"use client";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartContext";
import { Truck } from "lucide-react";

const CartPage = () => {
  const { cart } = useCart();

  const cartProducts = cart;
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='h-screen px-5 md:px10 lg:px-20  flex flex-col md:flex-row gap-8 p-8 bg-stone-100'>
      <div className='w-full md:w-2/3  md:h-80 '>

        {/* for laptop */}
        <h1 className='capitalize hidden lg:block'>My cart</h1>

        {/* for tablet */}
        <p className='capitalize text-4xl font-semibold hidden md:block mb-4 lg:hidden'>My cart</p>

        {/* for mobile */}
        <p className='capitalize text-3xl font-semibold block md:hidden'>My cart</p>

        <div className="space-y-4">
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem key={product.id} info={product} />
            ))
          ) : (
            <p className='text-lg'>Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className='w-full md:w-1/3 h-fit bg-white p-6 rounded-xl'>
        <h2 className='capitalize'>order summary</h2>
        <div className='text-md capitalize'>
          <div className='flex justify-between border border-x-0 border-t-0 border-stone-200 pb-1 my-2'>
            <p className='text-muted-foreground'>sub total</p>
            <p className='font-semibold'>${subtotal.toFixed(2)}</p>
          </div>
          <div className='flex justify-between border border-x-0 border-t-0 border-stone-200 pb-1 my-2'>
            <p className='text-muted-foreground'>shipping</p>
            <p className='font-semibold'>Free</p>
          </div>
          <div className='flex justify-between pb-1 my-3'>
            <p className='text-muted-foreground text-xl'>total</p>
            <p className='font-bold text-xl'>${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <Button className={"bg-secondary text-lg py-6 mt-4"}>
          <Truck className='size-6' />
          Check out
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
