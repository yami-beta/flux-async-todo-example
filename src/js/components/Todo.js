import React from 'react';
import TodoActions from '../actions/TodoActions';

const Todo = ({id, text, complete}) => {
  const onChange = (event) => {
    TodoActions.toggleComplete({ id, text, complete });
  };

  return (
    <li>
      <input type="checkbox" id={`todo${id}`} onChange={onChange} checked={complete} />
      <label htmlFor={`todo${id}`}>{text}</label>
    </li>
  );
};

export default Todo;
