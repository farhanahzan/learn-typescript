import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const Todo = () => {
  const [todos, setTodos] = React.useState<string[]>([]);

  const addTodo = (task: string) => {
    if (task != '') {
      setTodos((prevTodos) => [...prevTodos, task]);
    }
  };
  console.log(todos);

  return (
    <div>
      <h2>ToDO App</h2>

      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};
