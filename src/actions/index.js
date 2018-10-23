// import React from 'react';
import {API_BASE_URL} from '../config.js';


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

export const ADD_ITEM = 'ADD_ITEM';
export const addItem = payload => ({
  type: ADD_ITEM,
  payload
})

export const MAKE_OFFER = 'MAKE_OFFER';
export const makeOffer = payload => ({
  type: MAKE_OFFER,
  payload
})

export const SHOW_ALL_ITEMS = 'SHOW_ALL_ITEMS';
export const showAllItems = payload => ({
  type: SHOW_ALL_ITEMS,
  payload
})

export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const setCurrentItem = payload => ({
  type: SET_CURRENT_ITEM,
  payload
})





export function createUser(params) {
  fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  // .then(json => dispatch(push('/showall')))
  .catch(err => console.log('create user error', err))
}

export const getAllItems = () => dispatch  => {
  fetch(`${API_BASE_URL}/items`)
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(showAllItems(data)));
}

export function createItem(params) {
  return function action(dispatch, getState) {
    return fetch(`${API_BASE_URL}/items`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${getState().token}`
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(item => dispatch(addItem(item)))
    .then(() => dispatch(getAllItems()))
    .catch(err => console.log('create items error', err))
  }
}

export function createOffer(params) {
  return function action(dispatch) {
    fetch(`${API_BASE_URL}/offers`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(offer => dispatch(makeOffer(offer)))
    .catch(err => console.log('create offer error', err))
  }
}

export function postUserLogin(params) {
  return function action(dispatch) {
    fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => dispatch(loginUser(user)))
    .catch(err => console.log('login user failed', err))
  }
}

export function getItemById(id){
  return function action(dispatch){
    fetch(`${API_BASE_URL}/items/${id}`)
      .then(res => {
        if(!res.ok){
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(item => dispatch(setCurrentItem(item)))
      .catch(err => console.log('retrieve item failed', err))
  }
}


