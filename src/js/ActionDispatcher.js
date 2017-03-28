export default class ActionDispatcher {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch(action) {
    this.dispatcher.dispatch(action);
  }
}
