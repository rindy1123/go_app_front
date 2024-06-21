"use server";

import { apiClient } from "@/api_client";
import { TodoStatus } from "@/type";
import { revalidatePath } from "next/cache";

export const updateTodo = async ({ id, status, title }: { id: string, status: TodoStatus, title: string }) => {
  await apiClient.todos.put(id, { status, title })
  revalidatePath('/todos');
}

export const deleteTodo = async ({ id }: { id: string }) => {
  await apiClient.todos.delete(id)
  revalidatePath('/todos');
}
