// import configureStoreDev from "./configureStore.dev";
// import configureStoreProd from "./configureStore.prod";
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer';
import {persistTokenMiddleware} from './customMiddleware/persistTokenMiddleware'


export default (initialState: any) => {
  const middlewares = [thunk, promise(), createLogger()];
  // const middlewares = [thunk, promise(), createLogger(), persistTokenMiddleware];
  //below includes the initial state which has the token, I think this was causing an error.
  // const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}