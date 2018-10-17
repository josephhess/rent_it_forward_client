import React from 'react';
import ReactDOM from 'react-dom';
import 'public/index.css';
// import App from '/src/components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignInForm from './components/signin-form';
import SignUpForm from './components/signup-form';
import reduxThunk from 'redux-thunk';
import { AUTHENTICATED } from 'src/actions/auth';


const user = localStorage.getItem('user');

if(user){
  store.dispatch({type: AUTHENTICATED});
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/'component={SignInForm} />
      <Route path='/'component={SignUpForm} />
    </Router>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
