export default class ActionDispatcher {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  dispatch(action) {
    this.dispatcher.dispatch(action);
  }

  start(action) {
    const { type, meta, payload } = action;
    this.dispatcher.dispatch({
      type,
      meta: Object.assign({}, { status: 'start' }, meta),
      payload,
    });
  }

  done(action) {
    const { type, meta, payload } = action;
    this.dispatcher.dispatch({
      type: action.type,
      meta: Object.assign({}, { status: 'done' }, meta),
      payload: action.payload,
    });
  }

  failed(action) {
    const { type, meta, payload } = action;
    this.dispatcher.dispatch({
      type,
      meta: Object.assign({}, { status: 'failed' }, meta),
      error: true,
      payload,
    });
  }
}
