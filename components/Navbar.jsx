import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-end mx-6 md:mx-24'>
       <Link href={'/add_todo'} className='bg-gradient-to-r from-[#1ecb89] to-[#0f8f66] shadow-xl shadow-green-400/30 px-8 py-4 rounded-xl shadow-neon-purple mt-6 font-semibold text-lg text-white'>Add New Task</Link>
    </div>
  )
}
