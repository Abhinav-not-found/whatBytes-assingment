import { Button } from "@/components/ui/button"
import { Truck } from "lucide-react"

const CartPage = () => {
  return (
    <div className="h-screen px-20 flex gap-8 p-8 bg-stone-100">
      <div className="w-2/3 h-80 ">
        <h1 className="capitalize">My cart</h1>
      </div>
      <div className="w-1/3 h-80 bg-white p-4 rounded-xl">
        <h2 className="capitalize">order summary</h2>
        <div className="text-md capitalize">
          <div className="flex justify-between border border-x-0 border-t-0 border-stone-200 pb-1 my-2">
            <p className="text-muted-foreground">sub total</p>
            <p className="font-semibold">$123</p>
          </div>
          <div className="flex justify-between border border-x-0 border-t-0 border-stone-200 pb-1 my-2">
            <p className="text-muted-foreground">shipping</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex justify-between pb-1 my-3">
            <p className="text-muted-foreground text-xl">total</p>
            <p className="font-bold text-xl">$123</p>
          </div>
        </div>
        <Button className={'bg-secondary text-lg py-6 mt-4'}>
          <Truck className="size-6" />
          Check out
        </Button>
      </div>
    </div>
  )
}

export default CartPage
