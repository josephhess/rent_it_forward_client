import React from 'react';
import {connect} from 'react-redux';
import {createItem} from '../actions';

class AddItem extends React.Component {

  onSubmit(event){
    event.preventDefault();
    this.props.dispatch(
      createItem({
          name: event.target.item_name.value,
          user_id: this.props.current_user_id,
          initial_price: event.target.price.value,
          description: event.target.description.value
        }
      )
    )
    .then(() => this.props.history.push('/myitems'))
  }

  render(){
    if(!this.props.current_user_id){
      this.props.history.push('/');
    }
    return(
      <section>
        <form onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="item_name" aria-label="input a name for the item you would like to list">Item Name</label>
          <input aria-labelledby="item_name" className="add_item_input" type="text" name="item_name" id="item_name" ></input>
          <label htmlFor="price" aria-label="input a price you would like to receive for the item you are listing">Price</label>
          <input aria-labelledby="price" className="add_item_input" type="number" name="price" id="price" ></input>
          <label htmlFor="description" aria-label="input a longer description of the item you are listing with details about item and when the item will be available for buyers">Item Description</label>
          <textarea aria-labelledby="description" className="add_item_input"  name="itemDescription" id="description" ></textarea>
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
    current_user_id: state.authReducer.currentUser.id
  }
};

export default connect(mapStateToProps)(AddItem);