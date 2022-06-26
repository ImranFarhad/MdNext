import React from 'react'
import Navbar from './Components/Navbar'

function index() {
  return (
    <>
      <Navbar/>
      <h1 className='bg-red-400 container mx-auto p-5 rounded text-white text-4xl w-2/4 hover:bg-green-300 transition-all cursor-pointer'>Lorem ipsum dolor sit amet.</h1>
    </>
  )
}

export default index