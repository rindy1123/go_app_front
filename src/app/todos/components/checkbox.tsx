'use client'
import { TodoStatus } from "@/type";
import { Checkbox } from "@nextui-org/react";

export default function TodoCheckbox({ id, status, title }: { id: string, status: TodoStatus, title: string }) {
  const onValueChange = async (isSelected: boolean) => {
    const status = isSelected ? 'done' : 'todo'
    console.log(status)
  }

  return (
    <Checkbox value={id} isSelected={status === 'done'} onValueChange={onValueChange}>
      {title}
    </Checkbox>
  );
}
