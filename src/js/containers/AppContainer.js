import React from 'react';
import { Container } from 'flux/utils';
import TodoList from '../components/TodoList';
import TodoStore from '../stores/TodoStore';

class App extends React.Component {
  // Containerで扱うStoreを列挙する
  static getStores() {
    return [
      TodoStore
    ];
  }

  // StoreをStateと対応付ける
  static calculateState() {
    return {
      todos: TodoStore.getState(),
    };
  }

  render() {
    return (
      <div>
        <p>Flux Async Todo Example</p>
        <TodoList {...this.state}/>
      </div>
    )
  }
}

export default Container.create(App);
