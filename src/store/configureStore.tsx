// import configureStoreDev from "./configureStore.dev";
// import configureStoreProd from "./configureStore.prod";
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer';


export default (initialState: any) => {
  const middlewares = [thunk, promise(), createLogger()];
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
  return store;
}

// const configure =
//   process.env.NODE_ENV === "production"
//     ? configureStoreProd
//     : configureStoreDev;

