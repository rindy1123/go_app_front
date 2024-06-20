import { TodoStatus } from "@/type";

interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
}

export interface TodoListResponse {
  todos: Todo[]
}

export interface TodoPostRequest {
  title: Todo['title'];
  status: Todo['status']
}

export interface TodoPostResponse {
  id: Todo['id'];
}

export interface TodoPutRequest {
  title: Todo['title'];
  status: Todo['status']
}

export type TodoPutResponse = Todo
