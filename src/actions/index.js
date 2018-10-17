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
