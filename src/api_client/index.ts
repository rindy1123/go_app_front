import { request } from './base';
import {
  TodoListResponse,
  TodoPostRequest,
  TodoPostResponse,
  TodoPutRequest,
  TodoPutResponse,
} from './interfaces/todos';

const paths = {
  todos: 'todos',
} as const;

export const apiClient = {
  todos: {
    list: async () =>
      request<TodoListResponse>({ path: paths.todos, method: 'GET' }),
    post: async (body: TodoPostRequest) =>
      request<TodoPostResponse, TodoPostRequest>({
        path: paths.todos,
        method: 'POST',
        body,
      }),
    put: async (id: string, body: TodoPutRequest) =>
      request<TodoPutResponse, TodoPutRequest>({
        path: `${paths.todos}/${id}`,
        method: 'PUT',
        body,
      }),
    delete: async (id: string) =>
      request<void>({ path: `${paths.todos}/${id}`, method: 'DELETE' }),
  },
};
