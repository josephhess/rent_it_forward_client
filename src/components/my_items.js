import React from 'react';
import { connect } from 'react-redux';
import { getItemsByUser, getOffersMadeByUser, getOffersRecByUser} from '../actions';
import {Link} from 'react-router-dom';

class MyItems extends React.Component {

  componentDidMount(){
    this.props.dispatch(getItemsByUser(this.props.current_user.id));
    this.props.dispatch(getOffersMadeByUser(this.props.current_user.id));
    this.props.dispatch(getOffersRecByUser(this.props.current_user.id));  
  }  

  render(){

    if(!this.props.current_user){
      this.props.history.push('/');
    }

    const myItems = this.props.items.map( (item) => {
      return (
      <tr key={item._id}>
         <td className="link_text"><Link to={{pathname: 'makeOffer', state:  {id: item._id}} }>{item.name}</Link></td>
         <td >{item.initial_price}</td>
         {/* <td className="display_if_wide">{item.description}</td> */}
       </tr>
      )
     })

     const myOffersMade = this.props.offers_made.map( (offer) => {
      return (
      <tr key={offer._id}>
         <td className="link_text"><Link to={{pathname: 'makeOffer', state:  {id: offer.item_id}} }>{offer.item_name}</Link></td>
         <td >{offer.offer_price}</td>
         <td>{offer.status}</td>
       </tr>
      )
     })

     const myOffersRec = this.props.offers_rec.map( (offer) => {
      return (
      <tr key={offer._id}>
         <td className="link_text"><Link to={{pathname: 'updateStatus', state:  {id: offer._id}} }>{offer.item_name}</Link></td>
         <td >{offer.offer_price}</td>
         <td>{offer.status}</td>
       </tr>
      )
     })

    return (
    <section>
      <section>
      <span>My Items</span>
        <table className="table_parent" aria-label="this table contains all the items you have listed on the site">
          <tbody>
          <tr>
            <td>item name</td>
            <td>asking price</td>
          </tr>
          {myItems}
          </tbody>
        </table>
      </section>
      <section>
      <span className="linerule"></span>
      <span>My Offers Made</span>
        <table className="table_parent" aria-label="this table contains all the offers you have made on other users items">
          <tbody>
          <tr>
            <td>item name</td>
            <td>offer price</td>
            <td>status</td>
          </tr>
          {myOffersMade}
          </tbody>
        </table>
      </section>
      <section>
      <span className="linerule"></span>
      <span>My Offers Recieved</span>
        <table className="table_parent" aria-label="this table contains all the offers other users have made on items you have listed">
          <tbody>
          <tr>
            <td>item name</td>
            <td>offer price</td>
            <td>status</td>
          </tr>
          {myOffersRec}
          </tbody>
        </table>
      </section> 
    </section>
   ) 

  }
}

export const mapStateToProps = (state) => {
  return {
    items: state.rentItForwardReducer.current_user_items,
    offers_made: state.rentItForwardReducer.current_user_offers_made,
    offers_rec: state.rentItForwardReducer.current_user_offers_rec,
    current_user: state.authReducer.currentUser
  }
}
export default connect(mapStateToProps)(MyItems);