import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import SignInForm from './components/signin-form';
import SignUpForm from './components/signup-form';
import ShowMyItems from './components/my_items';
import ShowAll from './components/show-all';
import AddItem from './components/add_item';
import MakeOffer from './components/add_offer';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/' component={SignInForm} exact={true}/>
        <Route path='/' component={SignUpForm} exact={true}/>
        <Route path='/showall' component={ShowAll} exact={true}/>
        <Route path='/addItem' component={AddItem} exact={true}/>
        <Route path='/myItems' component={ShowMyItems} exact={true}/>
        <Route path='/makeOffer' component={MakeOffer} exact={true}/>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
