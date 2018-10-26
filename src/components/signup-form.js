import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import { createUser } from '../actions';

class SignUpForm extends React.Component {
  
onSubmit(event) {
  event.preventDefault();
    this.props.dispatch(
      createUser({
        email: event.target.signupEmail.value,
        password: event.target.signupPassWord.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        zipCode: event.target.zipCode.value
      })
    )   
  }
  render() {
    if (this.props.token){
      return <Redirect to="/showall"/>
    }
    return (
      <section>
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="firstName">first name</label>
          <input type="text" name="firstName" id="firstName" />
          <label htmlFor="lastName">last name</label>
          <input type="text" name="lastName" id="lastName" />
          <label htmlFor="signupEmail">email</label>
          <input type="signupEmail" name="signupEmail" id="signupEmail" aria-labelledby="signupEmail" />
          <label htmlFor="signupPassWord">password</label>
          <input
            type="password"
            name="signupPassWord"
            id="signupPassWord"
            aria-labelledby="password"
          />
          <label htmlFor="passWordConfirm">confirm password</label>
          <input
            type="password"
            name="passWordConfirm"
            id="passWordConfirm"
            aria-labelledby="password confirm"
          />
          <label htmlFor="zipCode">zip code</label>
          <input type="text" name="zipCode" id="zipCode" />
          <button type="submit" name="submit" id="guessButton">
            Sign Up
          </button>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = (state) => {
  return {token: state.authReducer.authToken}
};

export default connect(mapStateToProps)(SignUpForm);
