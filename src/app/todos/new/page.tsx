import { apiClient } from "@/api_client/api";
import { TODO_POST_API, TodoPostRequest, TodoPostResponse } from "@/api_client/todos/post";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function New() {
  const create = async (formData: FormData) => {
    'use server'

    // TODO: form data type
    const rawFormData = Object.fromEntries(formData);
    const title = rawFormData.title as string
    const status = 'todo' as const
    const body = { title, status }
    await apiClient<TodoPostResponse, TodoPostRequest>({ ...TODO_POST_API, body })
    revalidatePath('/todos')
    redirect('/todos')
  }

  return (
    <>
      <form action={create}>
        <div className="flex justify-center w-80 ml-4 mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
      </form>
    </>
  );
}
