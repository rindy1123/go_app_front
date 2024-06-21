'use client';

import { TodoStatus } from '@/type';
import { Button, Checkbox } from '@nextui-org/react';
import { deleteTodo, updateTodo } from './actions';

export default function TodoCheckbox({
  id,
  status,
  title,
}: {
  id: string;
  status: TodoStatus;
  title: string;
}) {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await updateTodo({ id, title, status: e.target.checked ? 'done' : 'todo' });
  };

  const onClick = async () => {
    await deleteTodo({ id });
  };

  return (
    <div className="flex flex-row gap-x-3">
      <Checkbox
        value={id}
        defaultSelected={status === 'done'}
        onChange={onChange}
      >
        {title}
      </Checkbox>
      <Button color="danger" onClick={onClick}>
        Delete
      </Button>
    </div>
  );
}
