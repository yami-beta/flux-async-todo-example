import { ReduceStore } from 'flux/utils';
import { Dispatcher } from 'flux';
import ActionDispatcher from '../ActionDispatcher';

export const actionDispatcher = new ActionDispatcher(new Dispatcher());

const todos = [
  { id: '0', text: 'first todo', complete: false },
  { id: '1', text: 'second todo', complete: true }
];

class TodoStore extends ReduceStore {
  constructor(dispatcher) {
    super(dispatcher);
  }

  getInitialState() {
    return todos;
  }

  reduce(state = todos, action) {
    switch(action.type) {
      case 'todo/load': {
        return state;
        break;
      }
      case 'todo/create': {
        const id = todos.length;
        const todo = Object.assign({}, action.payload, { id });
        return [ ...state, todo ];
        break;
      }
      case 'todo/update': {
        const { id } = action.payload;
        const todoIndex = todos.findIndex((element, index) => element.id === id);
        if (todoIndex < 0) {
          console.log(`error: id = ${id} not found`);
          return state;
        }

        const todo = Object.assign({}, todos[todoIndex], action.payload);
        return [
          ...todos.slice(0, todoIndex),
          todo,
          ...todos.slice(todoIndex + 1)
        ];
        break;
      }
      case 'todo/delete': {
        const { id } = action.payload;
        const todoIndex = todos.findIndex((element, index) => element.id === id);
        if (todoIndex < 0) {
          return state;
        }
        return todos.splice(todoIndex, 1);
        break;
      }
      default: {
        return state;
      }
    }
  }
}

export default new TodoStore(actionDispatcher.dispatcher);
