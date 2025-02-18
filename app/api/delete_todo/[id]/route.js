import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params;

    const db = await connectDB();
    const todos = db.collection("todos");

    const result = await todos.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ error: "Todo not found" }), 
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: "Todo deleted successfully",
        redirect: '/'
      }), 
      {
        status: 200,
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
