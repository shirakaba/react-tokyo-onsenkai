'use client';

import { GripVertical, Info } from 'lucide-react';
import { useState } from 'react';
import {
  Button,
  Checkbox,
  CheckboxProps,
  GridList,
  GridListItem,
  GridListItemProps,
  Input,
} from 'react-aria-components';

export function TodoList({ initialTodos }: TodoListProps) {
  const [todos, _setTodos] = useState<Array<TodoProps>>(initialTodos);
  const [pendingTodo, _setPendingTodo] = useState<TodoProps>({
    id: 'pending',
    textValue: '',
  });

  return (
    <section>
      <GridList
        selectionMode="multiple"
        selectionBehavior="toggle"
        className="space-y-2"
      >
        {todos.map(({ id, ...rest }) => (
          <Todo key={id} id={id} {...rest} />
        ))}
        <Todo id="pending" {...pendingTodo} />
      </GridList>
    </section>
  );
}

export interface TodoListProps {
  initialTodos: Array<TodoProps>;
}

function Todo({ id, value, textValue }: TodoProps) {
  return (
    <GridListItem
      id={id}
      value={value}
      textValue={textValue}
      className="border p-2 flex items-center"
    >
      <Button slot="drag" className="p-1">
        <GripVertical size={18} />
      </Button>
      <MyCheckbox slot="selection" isIndeterminate />
      <Input value={textValue} className="p-1" />
      <Button aria-label="Info">
        <Info size={20} />
      </Button>
    </GridListItem>
  );
}

export type TodoProps = Pick<GridListItemProps, 'id' | 'value' | 'textValue'>;

export function MyCheckbox({
  children,
  ...props
}: Omit<CheckboxProps, 'children'> & { children?: React.ReactNode }) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  );
}
