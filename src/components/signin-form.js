import React from 'react';
import { connect } from 'react-redux';
import {postUserLogin} from '../actions';
import {Redirect} from 'react-router-dom';

class SignInForm extends React.Component {
 
    onSubmit(event) {
      event.preventDefault();
      this.props.dispatch(
        postUserLogin({
          username: event.target.email.value,
          password: event.target.passWord.value,
        })
      );
    };
    render() {
      if(this.props.loggedIn){
       return <Redirect to="/showall"/>
      }
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
            Submit
          </button>
        </form>
        <section>
          <p>
            Rent it forward is a place that enables you to buy the things you
            only need on a temporary basis and find people who are ready to buy
            it from you when you are done with it. It's also a place where you
            can make offers on very gently used items and save some $$! Sign in
            or Sign up to view all our items, add items you are interested in,
            and make offers on items other members have posted.
          </p>
        </section>
      </section>
    );
  }
}


export const mapStateToProps = (state) => {
  return {loggedIn: state.loggedIn}
};

export default connect(mapStateToProps)(SignInForm);
