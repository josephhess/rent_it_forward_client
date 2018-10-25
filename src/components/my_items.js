import React from 'react';
import { connect } from 'react-redux';
import { getItemsByUser, getOffersMadeByUser, getOffersRecByUser} from '../actions';
import {Link} from 'react-router-dom';

class MyItems extends React.Component {

  componentDidMount(){
    this.props.dispatch(getItemsByUser(this.props.current_user_id));
    this.props.dispatch(getOffersMadeByUser(this.props.current_user_id));
    this.props.dispatch(getOffersRecByUser(this.props.current_user_id));  
  }
  // const dummyData = [
  //   {id: 1 ,name: 'Dewalt table saw' ,initial_price: 400},
  //   {id: 2 ,name: 'Dewalt 12" tile saw' ,initial_price: 600},
  //   {id: 3 ,name: 'Ryobi pressure washer',initial_price: 200},
  //   {id: 4 ,name: 'Epson large format printer',initial_price: 150}
  // ];
  
  // const htmlData = dummyData.map( item => {
  //  return (
  //  <tr>
  //     <td><a href={`http://localhost:3000/show_item/${item.id}`}>click</a></td>
  //     <td>{item.name}</td>
  //     <td>{item.initial_price}</td>
  //   </tr>
  //  )
  // })
  

  render(){

    const myItems = this.props.items.map( (item) => {
      return (
      <tr key={item._id}>
         <td ><Link to={{pathname: 'makeOffer', state:  {id: item._id}} }>{item.name}</Link></td>
         <td >{item.initial_price}</td>
         {/* <td className="display_if_wide">{item.description}</td> */}
       </tr>
      )
     })

     const myOffersMade = this.props.offers_made.map( (offer) => {
      return (
      <tr key={offer._id}>
         <td ><Link to={{pathname: 'makeOffer', state:  {id: offer.item_id}} }>{offer.item_name}</Link></td>
         <td >{offer.offer_price}</td>
         <td>{offer.status}</td>
       </tr>
      )
     })

     const myOffersRec = this.props.offers_rec.map( (offer) => {
      return (
      <tr key={offer._id}>
         <td ><Link to={{pathname: 'makeOffer', state:  {id: offer.item_id}} }>{offer.item_name}</Link></td>
         <td >{offer.offer_price}</td>
         <td>{offer.status}</td>
       </tr>
      )
     })

    return (
    <section>
      <section>
      <span>My Items</span>
        <table className="table_parent">
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
        <table className="table_parent">
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
        <table className="table_parent">
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
    items: state.current_user_items,
    offers_made: state.current_user_offers_made,
    offers_rec: state.current_user_offers_rec,
    current_user_id: state.current_user_id
  }
}
export default connect(mapStateToProps)(MyItems);