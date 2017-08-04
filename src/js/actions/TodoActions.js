import { actionDispatcher } from '../stores/TodoStore';

const TodoActions = {
  create: (todo) => {
    actionDispatcher.dispatch({
      type: 'todo/create',
      payload: {
        text: todo.text,
        complete: false,
      },
    });
  },

  delete: ({ id }) => {
    actionDispatcher.dispatch({
      type: 'todo/delete',
      payload: { id },
    });
  },

  toggleComplete: (todo) => {
    actionDispatcher.dispatch({
      type: 'todo/update',
      payload: {
        id: todo.id,
        complete: !todo.complete,
      },
    });
  },
};
export default TodoActions;
