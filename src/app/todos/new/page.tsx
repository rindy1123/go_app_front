import { apiClient } from "@/api_client";
import { Button, Input } from "@nextui-org/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface RawFormData {
  title: string;
}

export default async function New() {
  const create = async (formData: FormData) => {
    'use server'

    const { title } = Object.fromEntries(formData) as unknown as RawFormData;
    if (!title) return

    await apiClient.todos.post({ title, status: 'todo' })
    revalidatePath('/todos')
    redirect('/todos')
  }

  return (
    <>
      <form action={create} className="flex flex-row ml-4 mt-4">
        <div className="flex justify-center w-80">
          <Input
            type="text"
            label="Title"
            name="title"
          />
        </div>
        <Button type="submit" className="ml-4" color="primary">Create</Button>
      </form>
    </>
  );
}
