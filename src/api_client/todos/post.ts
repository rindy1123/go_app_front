export const TODO_POST_API = {
  path: 'todos',
  method: 'POST'
} as const

export interface TodoPostRequest {
  title: string;
  status: 'todo' | 'inprogress' | 'done'
}

export interface TodoPostResponse {
  id: string;
}
