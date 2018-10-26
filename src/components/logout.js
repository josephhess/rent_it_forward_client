import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../actions/auth';

class Logout extends React.Component {

  componentDidMount(){
    this.props.dispatch(logout())
  }
  // onSubmit(event){
  //   event.preventDefault();
  //   this.props.dispatch(
  //     createOffer({
  //         item_id: this.props.item._id,
  //         buyer_user_id: this.props.current_user_id,
  //         owner_user_id: this.props.item.user_id,
  //         offer_price: event.target.price.value,
  //         item_name: this.props.item.name
  //       }
  //     )
  //   )
  //   .then(() => this.props.history.push('/myitems'))
  // }

  render(){
    return(
      <section className="item_display logout">
        <p>You have successfully logged out</p>
        <p>Thanks for visiting!!</p>
        <Link to={{pathname: '/'} }>Log in again</Link>
      </section>
    )
  }
}

export const mapStateToProps = (state) => {
  return {    
  }
};

export default connect(mapStateToProps)(Logout);