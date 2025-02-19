"use client"
import React, { useState, useEffect } from 'react'

const getTodos = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_todos`);
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

const handleDelete = async (id, setTodos) => {
   try {
     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/delete_todo/${id}`, {
       method: 'DELETE',
     });
 
     const data = await res.json();
 
     if (!res.ok) {
       alert(data.error);
       return;
     }
 
     alert('Task deleted successfully!');
     // Fetch updated todos instead of reloading
     const updatedTodos = await getTodos();
     setTodos(updatedTodos);
   } catch (error) {
     alert('Failed to delete task. Please try again.');
   }
 };

export default function Task() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosData = await getTodos();
      setTodos(todosData);
    };
    
    fetchTodos();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo._id} className="bg-gray-800/50 p-6 rounded-xl shadow-lg shadow-black/30 mb-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="w-5 h-5 accent-green-500" />
                <p className=" text-lg md:text-xl font-semibold text-green-300 ">{todo.task_title}</p>
              </div>
              
              <div className="flex gap-3">
                <button className="p-2 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>

                <button onClick={() => handleDelete(todo._id, setTodos)} className="p-2 rounded-lg bg-red-600/30 hover:bg-red-600/50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p className="text-gray-400 text-base">{todo.task_description}</p>
          </div>
        </div>
      ))}
      
    </div>
  )
}
