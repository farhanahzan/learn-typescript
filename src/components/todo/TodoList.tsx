import React from 'react'

type TodoListProps={
    todos:string[]
}

export const TodoList = ({todos}: TodoListProps) => {
  return <div>{
    todos.map((todo)=> (
        <p key={todo}>{todo}</p>
    ))
    }</div>;
};
