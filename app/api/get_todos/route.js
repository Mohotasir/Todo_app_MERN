import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB();
    const todos = db.collection("todos");
    const allTodos = await todos.find({}).sort({ createdAt: -1 }).toArray();

    return new Response(JSON.stringify(allTodos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
