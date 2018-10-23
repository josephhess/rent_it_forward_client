import React from 'react';
import {connect} from 'react-redux';
import NavDropdown from './dropdown';
import {makeOffer} from '../actions';
// import {Redirect} from 'react-router-dom';

class MakeOffer extends React.Component {

  onSubmit(event){
    event.preventDefault();
    this.props.dispatch(
      makeOffer({
        item_name: event.target.user_id.value,
          user_id: event.target.user_id.value,
          price: event.target.price.value,
          description: event.target.description.value
        }
      )
    )
  }

  render(){
    return(
      <section>
        <NavDropdown/>
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="item_name">Item Name</label>
          <input className="add_item_input" type="text" name="item_name" id="itemName" ></input>
          <label htmlFor="price">Price</label>
          <input className="add_item_input" type="number" name="price" id="itemPrice" ></input>
          <label htmlFor="description">Item Description</label>
          <textarea className="add_item_input"  name="itemDescription" id="description" ></textarea>
          <button type="submit" name="submit" id="addItemButton">
            Submit
          </button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    
  }
};

export default connect(mapStateToProps)(MakeOffer);