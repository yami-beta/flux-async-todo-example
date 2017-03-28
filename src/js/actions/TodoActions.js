import { actionDispatcher } from '../stores/TodoStore';

const TodoActions = {
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
