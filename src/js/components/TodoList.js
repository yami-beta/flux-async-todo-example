import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {
        todos.map(todo => {
          return <li key={todo.id} className={todo.complete ? 'done' : ''}>{todo.text}</li>;
        })
      }
    </ul>
  );
};

export default TodoList;
