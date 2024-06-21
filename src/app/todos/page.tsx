import { Link } from '@nextui-org/react';
import TodoCheckbox from './components/checkbox';
import { apiClient } from '@/api_client';

export default async function Index() {
  const { todos } = await apiClient.todos.list();

  return (
    <div className="ml-5">
      <div className="flex justify-start mt-5">
        <Link href="/todos/new" color="primary">
          Create
        </Link>
      </div>

      <div className="mt-8">
        {todos.length === 0 ? (
          <div>No todos</div>
        ) : (
          <div className="flex flex-col gap-y-4">
            {todos.map((todo) => (
              <TodoCheckbox
                key={todo.id}
                id={todo.id}
                status={todo.status}
                title={todo.title}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
