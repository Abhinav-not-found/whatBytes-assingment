import { useCart } from '@/context/cartContext'
import { Trash } from 'lucide-react'
import React from 'react'

const CartItem = ({info}) => {

  const { removeFromCart } = useCart()

  const handleDelete = (id)=>{
    removeFromCart(id)
    console.log('removing item: ', info.id)
  }

  return (
    <div className='w-full h-32 bg-white rounded-lg p-4 flex justify-between'>
      <div className='flex gap-4'>
        <div className='bg-red-50 h-full w-24 md:w-24 lg:w-28 rounded-md'
          style={{
            backgroundImage:`url('${info.image}')`,
            backgroundSize:'cover',
            backgroundPosition:'center'
          }}
        ></div>
        <div>
          <p className='text-xl '>{info.title}</p>
          <p className='text-2xl font-semibold'>{info.price}</p>
          <p className='text-muted-foreground'>{info.category}</p>
        </div>
      </div>
      <button onClick={()=>handleDelete(info.id)} className='hover:bg-red-100 rounded-sm transition cursor-pointer text-muted-foreground hover:w-14 hover:flex hover:justify-center hover:items-center hover:text-stone-700'>
        <Trash className='size-4'/>
      </button>

    </div>
  )
}

export default CartItem
