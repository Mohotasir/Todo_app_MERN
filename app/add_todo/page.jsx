import React from 'react'

export default function page() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-gray-800/30 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">Add New Task</h2>
          <p className="text-gray-400 mb-8">Create and manage your tasks efficiently. Add detailed descriptions to stay organized and track your progress.</p>
          
          <form className="space-y-6">
            <input 
              type="text"
              placeholder="Enter task title..."
              className="w-full bg-gray-800/50 text-gray-200 px-6 py-5 rounded-xl outline-none border border-gray-700 focus:border-green-500 transition-colors text-lg"
            />
            <textarea
              placeholder="Enter task description..."
              rows="4"
              className="w-full bg-gray-800/50 text-gray-200 px-6 py-5 rounded-xl outline-none border border-gray-700 focus:border-green-500 transition-colors text-lg"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#1ecb89] to-[#0f8f66] px-8 py-4 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-green-400/20"
            >
              Add Task
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center p-6">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Organized</h3>
          <p className="text-gray-400 mb-6">Keep track of your tasks and boost your productivity with our intuitive todo management system.</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Create detailed task descriptions</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Track your progress easily</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Stay organized and focused</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
