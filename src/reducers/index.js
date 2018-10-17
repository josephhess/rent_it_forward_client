import { LOGIN_USER, SIGN_UP_USER } from '../actions';
// import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import authReducer from './auth_reducer';

// const rootReducer = combineReducers({
//   form: formReducer,
//   auth: authReducer
// });

const initialState = {
  action: '',
  email: '',
  passWord: '',
  loggedIn: false
};

export const rentItForwardReducer = (state = initialState, action) => {
  if (action.type === LOGIN_USER) {
    return Object.assign({}, state, {
      passWord: action.payload.passWord,
      email: action.payload.email
    });
  }
  if (action.type === SIGN_UP_USER) {
    return;
  }
  return state;
};

