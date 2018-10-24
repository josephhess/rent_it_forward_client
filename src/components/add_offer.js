import React from 'react';
import {connect} from 'react-redux';
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
    return(
      <section className="item_display">
        <label>Item Name:</label>
        <span>{this.props.item.name}</span>
        <label>Asking Price:</label>
        <span>{this.props.item.initial_price}</span>
        <label>Description: </label>
        <span>{this.props.item.description}</span>
        <span className="linerule"></span>
        <form className="super" onSubmit={e => this.onSubmit(e)}>
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