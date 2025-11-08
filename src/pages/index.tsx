import { TodoList } from '../components/todo-list';

export default async function HomePage() {
  const data = await getData();

  return <TodoList initialTodos={data} />;
}

const getData = async () => {
  const data = [{ id: 'initial', textValue: 'hoge' }];

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
