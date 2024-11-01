import React from 'react'
import { FaSpinner } from 'react-icons/fa';

type Props = {}

function loading({}: Props) {
  return (
    <div className="flex h-screen justify-center items-center ">
   <p className='text-3xl relative animate-spin text-sky-500'> Loading...</p>
  </div>
  )
}

export default loading