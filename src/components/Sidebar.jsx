import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full h-80 bg-primary rounded-lg p-4'>
      <h2 className='mb-4'>Filters</h2>
      <p className='font-semibold'>Category</p>
      <div>
        <div className='flex gap-2'>
          <input type="radio" />
          <label htmlFor="All">All</label>
        </div>
        <div className='flex gap-2'>
          <input type="radio" />
          <label htmlFor="Electronic">Electronic</label>
        </div>
        <div className='flex gap-2'>
          <input type="radio" />
          <label htmlFor="All">All</label>
        </div>
        <div className='flex gap-2'>
          <input type="radio" />
          <label htmlFor="All">All</label>
        </div>
      </div>
      <p className='mt-4 font-semibold'>Price</p>
      <input type="range" />
    </div>
  )
}

export default Sidebar
