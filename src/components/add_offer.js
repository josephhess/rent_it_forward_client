import React from 'react';
import {connect} from 'react-redux';
import {getItemById} from '../actions';
import {createOffer} from '../actions';
// import {Redirect} from 'react-router-dom';

class MakeOffer extends React.Component {

  componentDidMount(){
    this.props.dispatch(getItemById(this.props.location.state.id))
  }
  onSubmit(event){
    event.preventDefault();
    this.props.dispatch(
      createOffer({
          item_id: this.props.item._id,
          buyer_user_id: this.props.current_user_id,
          owner_user_id: this.props.item.user_id,
          offer_price: event.target.price.value,
          item_name: this.props.item.name
        }
      )
    )
    .then(() => this.props.history.push('/myitems'))
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
          <fieldset>
            <label htmlFor="price">Your Offer</label>
            <input aria-labelledby="price" className="add_item_input" type="number" name="price" id="price" ></input>
            <button type="submit" name="submit" id="addItemButton">
              Submit
            </button>
          </fieldset>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    item: state.rentItForwardReducer.current_item,
    current_user_id: state.authReducer.currentUser.id
    
  }
};

export default connect(mapStateToProps)(MakeOffer);