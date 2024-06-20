import { apiClient } from "@/api_client/api"
import { TODO_INDEX_API, TodoIndexResponse } from "@/api_client/todos";
import Link from "next/link";

export const revalidate = 30

export default async function Index() {
  const { todos } = await apiClient<TodoIndexResponse>(TODO_INDEX_API)

  return (
    <>
      <div className="flex justify-end mt-5 mr-5">
        <Link
          href="/todos/new"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </Link>
      </div>

      <div className="flex justify-center">
        {todos.length === 0 ? (
          <div>No todos</div>
        ) : (
          <div>
            {todos.map(todo => (
              <div key={todo.id}>{todo.status}: {todo.title}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
