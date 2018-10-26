import React from 'react';
import {connect} from 'react-redux';
import {getOfferById} from '../actions';
import {updateOfferStatus,  updateCurrentOffer} from '../actions';

class UpdateStatus extends React.Component {

  handleOptionChange(event){
    this.props.dispatch(updateCurrentOffer(event.target.value));
  }
  componentDidMount(){
    this.props.dispatch(getOfferById(this.props.location.state.id))
  }

  onSubmit(event){
    event.preventDefault();
    this.props.dispatch(
      updateOfferStatus({
          id: this.props.offer._id,
          status: event.target.status.value
        }
      )
    )
    .then(() => this.props.history.push('/myitems'))
  }

  render(){
    return(
      <section className="item_display">
        <label>Item Name:</label>
        <span>{this.props.offer.item_name}</span>
        <label>Offer:</label>
        <span>{this.props.offer.offer_price}</span>
        <span className="linerule"></span>
        <form className="super" onSubmit={e => this.onSubmit(e)}>
          <div className="radio">
            <label htmlFor="status">
              <input name="status" type="radio" value="pending" 
              checked={this.props.offer.status === 'pending'} 
              onChange={e => this.handleOptionChange(e)}/>
              Pending
            </label>
          </div>
          <div className="radio">
            <label htmlFor="status">
              <input name="status" type="radio" value="accepted" 
              checked={this.props.offer.status === 'accepted'} 
              onChange={e => this.handleOptionChange(e)}/>
              Accepted
            </label>
          </div>
          <div className="radio">
            <label htmlFor="status">
              <input name="status" type="radio" value="politely declined" 
              checked={this.props.offer.status === 'politely declined'}
              onChange={e => this.handleOptionChange(e)} />
              Politely Declined
            </label>
          </div>
          <button type="submit" name="submit" id="updateStatusButton">
            Submit
          </button>
        </form>
      </section>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    offer: state.rentItForwardReducer.current_offer,
    current_user_id: state.authReducer.currentUser.id
    
  }
};

export default connect(mapStateToProps)(UpdateStatus);