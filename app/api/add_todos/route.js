import { connectDB } from "@/lib/connectDB";
import { redirect } from 'next/navigation';

export const POST = async (request) => {
  try {
    const { task_title, task_description } = await request.json();

    if (!task_title || !task_description) {
      return new Response(
        JSON.stringify({ error: "Title and description are required" }), 
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const db = await connectDB();
    const todos = db.collection("todos");

    const newTodo = {
      task_title,
      task_description,
      is_completed: false,
      createdAt: new Date()
    };

    const result = await todos.insertOne(newTodo);

    return new Response(
      JSON.stringify({ 
        message: "Todo added successfully", 
        todo: newTodo,
        redirect: '/'
      }), 
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
