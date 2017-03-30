import React from 'react';
import TodoActions from '../actions/TodoActions';

const CreateTodo = (props) => {
  let text = '';
  const onChange = (event) => {
    text = event.target.value;
  };

  const createTodo = (event) => {
    TodoActions.create({ text });
    text = '';
    document.getElementById('create-todo-input').value = '';
  };

  return (
    <div className="create-todo">
      <input type="text" id="create-todo-input" onChange={onChange} />
      <button onClick={createTodo}>作成</button>
    </div>
  );
};

export default CreateTodo;
