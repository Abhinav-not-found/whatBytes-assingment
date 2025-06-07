import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col bg-secondary text-white p-8 px-20'>
      <div className='flex justify-between'>
        <div>
          <h2 className='mb-4'>Filters</h2>
          <p>All</p>
        </div>
        <div>
          <h2 className='mb-4'>About Us</h2>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h2 className='mb-4'>Follow Us</h2>
          <div className='flex gap-4'>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
        <div className='mt-4'>
          <p>© 2025 American</p>
        </div>
    </footer>
  )
}

export default Footer
