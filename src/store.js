import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { rentItForwardReducer } from './reducers';
import {authReducer} from './reducers/auth';
import {loadAuthToken} from './local-storage';
import {setAuthToken, refreshAuthToken, authSuccess} from './actions/auth';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

const rootReducer = combineReducers({
  rentItForwardReducer,
  authReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    const decodedToken = jwtDecode(token);
    store.dispatch(setAuthToken(authToken));
    store.dispatch(authSuccess(decodedToken.user));
    store.dispatch(refreshAuthToken());
}

export default store;
