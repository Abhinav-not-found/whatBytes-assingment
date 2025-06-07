import { Trash } from 'lucide-react'
import React from 'react'

const CartItem = () => {
  return (
    <div className='w-full h-32 bg-white rounded-lg p-4 flex justify-between'>
      <div className='flex gap-4'>
        <div className='bg-red-50 h-full w-28 rounded-md'></div>
        <div>
          <p className='text-xl '>Title</p>
          <p className='text-2xl font-semibold -mt-2'>price</p>
          <p className='text-muted-foreground'>category</p>
        </div>
      </div>
      <button className='hover:bg-red-100 rounded-sm transition cursor-pointer text-muted-foreground hover:w-14 hover:flex hover:justify-center hover:items-center hover:text-stone-700'>
        <Trash className='size-4'/>
      </button>

    </div>
  )
}

export default CartItem
