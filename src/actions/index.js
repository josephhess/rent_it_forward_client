import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const loginUser = payload => ({
  type: LOGIN_USER,
  payload
});

export const SIGN_UP_USER = 'SIGN_UP_USER';
export const signUpUser = payload => ({
  type: SIGN_UP_USER,
  payload
});


export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

const URL = 'http://localhost:3000/';

export function signInAction({ email, password }, history) {
  return async dispatch => {
    try {
      const res = await axios.post(`${URL}/signin`, { email, password });

      dispatch({ type: AUTHENTICATED });
      localStorage.setItem('user', res.data.token);
      history.push('/secret');
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: 'Invalid email or password'
      });
    }
  };
}