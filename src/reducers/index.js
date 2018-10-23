// import React from 'react';
import { LOGIN_USER, SIGN_UP_USER ,ADD_ITEM,SHOW_ALL_ITEMS,MAKE_OFFER} from '../actions';


const initialState = {
  action: '',
  loggedIn: false,
  token: '',
  email: '',
  passWord: '',
  firstname: '',
  lastname: '',
  zipcode: '',
  allItems: [],
  current_item: {},
  current_offer: {},
  current_user_id: "5bcbe23d3fc0505760e911f7"
};

export const rentItForwardReducer = (state = initialState, action) => {
  if (action.type === LOGIN_USER) {
    return Object.assign({}, state, {
      token: action.payload.token
    });
  }
  if (action.type === SIGN_UP_USER) {
    return Object.assign({}, state, {
      passWord: action.payload.passWord,
      email: action.payload.email,
      // token: token,
      firstname: action.payload.firstname,
      lastname: action.payload.lastname,
      zipcode: action.payload.zipcode,
      loggedIn: true
    });
  }
  if (action.type === SHOW_ALL_ITEMS){
    return Object.assign({}, state, {
      allItems: action.payload
    })
    
  }
  if (action.type === ADD_ITEM){
    return Object.assign({}, state, {
      current_item: action.payload
    })
  }
  if (action.type === MAKE_OFFER){
    return Object.assign({}, state, {
      current_offer: action.payload
    })   
  }
  return state;
};

