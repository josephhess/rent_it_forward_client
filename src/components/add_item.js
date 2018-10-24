import React from 'react';
import {connect} from 'react-redux';
import {createItem} from '../actions';
import {Redirect} from 'react-router-dom';

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
    .then(() => this.props.history.push('/showall'))
  }

  render(){
    // if(!this.props.current_user_id){
    //   return <Redirect to='/'/>
    // }
    return(
      <section>
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
    current_user_id: state.current_user_id
  }
};

export default connect(mapStateToProps)(AddItem);