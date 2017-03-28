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
      default: {
        return state;
      }
    }
  }
}

export default new TodoStore(actionDispatcher.dispatcher);
