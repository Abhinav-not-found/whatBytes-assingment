import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const ProductCard = ({data}) => {
  return (
    <div className='p-8 bg-red-50 w-80 rounded-xl'>
      <div>
        <Image src={data.image} width={100} height={100} alt={data.alt} />
      </div>
      <p className='text-'>{data.title}</p>
      <p className='text-xl font-semibold'>${data.price}</p> 
      <Button className={'bg-primary mt-4'}>Add to Cart</Button>
      {/* <p>star rating(optional)</p> */}
    </div>
  )
}

export default ProductCard

// ok lets get back to commit messages
// this time i added primary and secondary colors in global css, added a product grid component which have product component along with sidebar component
