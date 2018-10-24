import React from 'react';
import {connect} from 'react-redux';
import NavDropdown from './dropdown';
import {getItemById} from '../actions';
import {makeOffer} from '../actions';
// import {Redirect} from 'react-router-dom';

class MakeOffer extends React.Component {

  componentDidMount(){
    this.props.dispatch(getItemById(this.props.location.state.id))
  }
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
    console.log(this.props.item)
    return(
      <section>
        <NavDropdown/>
        <div>Item Name: {this.props.item.name}</div>
        <div>Asking Price: {this.props.item.initial_price}</div>
        <div>Description: {this.props.item.description}</div>
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="price">Your Offer</label>
          <input className="add_item_input" type="number" name="price" id="itemPrice" ></input>
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
    item: state.current_item,
    
  }
};

export default connect(mapStateToProps)(MakeOffer);