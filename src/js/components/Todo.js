import React from 'react';
import TodoActions from '../actions/TodoActions';

const Todo = ({id, text, complete}) => {
  const onChange = (event) => {
    TodoActions.toggleComplete({ id, text, complete });
  };

  const deleteTodo = (event) => {
    TodoActions.delete({ id });
  };

  return (
    <li>
      <input type="checkbox" id={`todo${id}`} onChange={onChange} checked={complete} />
      <label htmlFor={`todo${id}`}>{text}</label>
      <button onClick={deleteTodo}>x</button>
    </li>
  );
};

export default Todo;
