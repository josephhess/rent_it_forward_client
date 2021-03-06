// import React from 'react';
import {API_BASE_URL} from '../config.js';
import {login} from '../actions/auth';


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

export const SET_CURRENT_OFFER = 'SET_CURRENT_OFFER';
export const setCurrentOffer = payload => ({
  type: SET_CURRENT_OFFER,
  payload
})

export const UPDATE_CURRENT_OFFER = 'UPDATE_CURRENT_OFFER';
export const updateCurrentOffer = payload => ({
  type: UPDATE_CURRENT_OFFER,
  payload
})

export const SET_ITEMS_BY_USER = 'SET_ITEMS_BY_USER';
export const setItemsByUser = payload => ({
  type: SET_ITEMS_BY_USER,
  payload
})

export const SET_OFFERS_MADE_BY_USER = 'SET_OFFERS_MADE_BY_USER';
export const setOffersMadeByUser = payload => ({
  type: SET_OFFERS_MADE_BY_USER,
  payload
})

export const SET_OFFERS_REC_BY_USER = 'SET_OFFERS_REC_BY_USER';
export const setOffersRecByUser = payload => ({
  type: SET_OFFERS_REC_BY_USER,
  payload
})

export function updateOfferStatus(params){
  return function action(dispatch){
    return fetch(`${API_BASE_URL}/offers/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',

      }
    })
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(offer => dispatch(setCurrentOffer(offer)))
  }
}

export function createUser(params){
  return function action(dispatch,getState){
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      }
    })
    .then(res => {
      if (!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => dispatch(login({
      username: user.email,
      password: params.password
    })))
    .catch(err => console.log('create user error', err))
  }
}

export function createItem(params) {
  return function action(dispatch,getState) {
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/items`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`
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


export function createOffer(params) {
  return function action(dispatch) {
    return fetch(`${API_BASE_URL}/offers`, {
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

export function getOfferById(id){
  return function action(dispatch){
    fetch(`${API_BASE_URL}/offers/${id}`)
      .then(res => {
        if(!res.ok){
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(item => dispatch(setCurrentOffer(item)))
      .catch(err => console.log('retrieve item failed', err))
  }
}

export function getItemsByUser(user_id){
  return function action(dispatch){
    fetch(`${API_BASE_URL}/items/byuser/${user_id}`)
      .then(res => {
        if(!res.ok){
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(items => dispatch(setItemsByUser(items)))
      .catch(err => console.log('retrieve items by user failed', err))
  }
}

export function getOffersMadeByUser(user_id){
  return function action(dispatch){
    fetch(`${API_BASE_URL}/offers/buyer/${user_id}`)
      .then(res => {
        if(!res.ok){
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(items => dispatch(setOffersMadeByUser(items)))
      .catch(err => console.log('retrieve offers made by user failed', err)
      )
  }
}

export function getOffersRecByUser(user_id){
  return function action(dispatch){
    fetch(`${API_BASE_URL}/offers/owner/${user_id}`)
    .then(res => {
      if(!res.ok){
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(items => dispatch(setOffersRecByUser(items)))
    .catch(err => console.log('retrieve offers recieved by user failed', err))
  }
}


