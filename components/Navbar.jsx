import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-end mb-12'>
       <Link href={'/add_todo'} className='bg-gradient-to-r from-[#1ecb89] to-[#0f8f66] shadow-xl shadow-green-400/30 px-8 py-4 rounded-xl shadow-neon-purple mt-6 font-semibold text-lg text-white flex items-center gap-2 hover:text-gray-200'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
         </svg>
         Add New Task
       </Link>
    </div>
  )
}
