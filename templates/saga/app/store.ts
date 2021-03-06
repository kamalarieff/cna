import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './reducer';
import rootSaga from './saga';

const dev = process.env.NODE_ENV === 'development';
const _initialState = {};
const sagaMiddleware = createSagaMiddleware();

export const initStore = (initialState = _initialState) => {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  let store = createStore(combineReducer(), initialState, ...enhancers);

  if (dev) {
    store = createStore(combineReducer(), initialState, composeWithDevTools(...enhancers));
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};
