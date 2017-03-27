import React from 'react';

const Todo = ({id, text, complete}) => {
  return (
    <li>
      <input type="checkbox" id={`todo${id}`} checked={complete} />
      <label htmlFor={`todo${id}`}>{text}</label>
    </li>
  );
};

export default Todo;
