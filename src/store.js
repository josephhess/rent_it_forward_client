import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { rentItForwardReducer } from './reducers';
import thunk from 'redux-thunk';

export default createStore(rentItForwardReducer, composeWithDevTools(
  applyMiddleware(thunk)
));


