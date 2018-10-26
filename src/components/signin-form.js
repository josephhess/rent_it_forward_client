import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/auth';
// import {Redirect} from 'react-router-dom';

class SignInForm extends React.Component {
 
    onSubmit(event) {
      event.preventDefault();
      this.props.dispatch(
        login({
          username: event.target.email.value,
          password: event.target.passWord.value,
        })
      )
      .then(() => this.props.history.push('/showall'))
    };
    render() {
    return (
      <section>
        <form onSubmit={ e => this.onSubmit(e)}>
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" aria-labelledby="email" />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="passWord"
            id="passWord"
            aria-labelledby="password"
          />
          <button type="submit" name="submit" id="signinButton">
            Log In
          </button>
        </form>
        <section>
          <span className="linerule"></span>
          <p className="landing_text">
            Rent it forward is a place that enables you to buy the things you
            only need on a temporary basis and find people who are ready to buy
            it from you when you are done with it. It's also a place where you
            can make offers on very gently used items and save some $$! Sign in
            or Sign up to view all our items, add items you are interested in,
            and make offers on items other members have posted.
          </p>
          <span className="linerule"></span>
        </section>
      </section>
    );
  }
}


export const mapStateToProps = (state) => {
  return {token: state.token}
};

export default connect(mapStateToProps)(SignInForm);
