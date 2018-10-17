import React from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/index.js';
import { Field, reduxForm } from 'redux-form';

class SignUpForm extends React.Component {
  render() {
  const onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      signUpUser({
        email: event.target.email.value,
        passWord: event.target.passWord.value
      })
    );
  }
 
    return (
      <section>
        <form onSubmit={e => this.onSubmit(e)}>
          <input type="text" name="firstName" id="firstName" />
          <input type="text" name="lastName" id="lastName" />
          <input type="signupEmail" name="signupEmail" id="signupEmail" aria-labelledby="signupEmail" />
          <input
            type="password"
            name="signupPassWord"
            id="signupPassWord"
            aria-labelledby="password"
          />
          <input
            type="password"
            name="passWordConfirm"
            id="passWordConfirm"
            aria-labelledby="password confirm"
          />
          <input type="text" name="zipCode" id="zipCode" />
          <button type="submit" name="submit" id="guessButton">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export const mapStateToProps = input => ({
  input
});

export default connect(mapStateToProps)(SignUpForm);
