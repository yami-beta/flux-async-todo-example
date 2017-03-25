import { ReduceStore } from 'flux/utils';
import { Dispatcher } from 'flux';

const todos = [
  { id: '0', text: 'first todo', complete: false }
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

export default new TodoStore(new Dispatcher());

