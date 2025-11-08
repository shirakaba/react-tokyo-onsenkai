import { Todo, type TodoProps } from './todo';

export function TodoSection({
  isSectionedTodoList,
  title = 'Others',
  todos,
}: TodoSectionProps) {
  return (
    <section>
      <>{isSectionedTodoList && <h2>{title}</h2>}</>
      {todos.map(({ id, ...rest }) => (
        <Todo key={id} id={id} {...rest} />
      ))}
    </section>
  );
}

export interface TodoSectionProps {
  isSectionedTodoList?: true;
  title?: string;
  todos: Array<TodoProps>;
}
