import { createStore } from 'redux';
import { rentItForwardReducer } from './reducers';

export default createStore(
  rentItForwardReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
