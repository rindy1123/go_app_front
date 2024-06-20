export const TODO_INDEX_API = {
  path: 'todos',
  method: 'GET'
} as const

export interface TodoIndexResponse {
  todos: {
    id: string;
    title: string;
    status: string;
  }[]
}
