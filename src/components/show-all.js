import React from 'react';
import {connect} from 'react-redux';
import NavDropdown from './dropdown';
import '../styles/showall.css';
import {getAllItems} from '../actions';
require('dotenv');

class ShowAll extends React.Component {

componentDidMount(){
  this.props.dispatch(getAllItems());
}

  render(){
    console.log(this.props.items)
    const htmlData = this.props.items.map( (item, index) => {
      return (
      <div key={index}>
         <div className="table_display"><a href={`http://localhost:3000/show_item/${item._id}`}>click</a></div>
         <div className="table_display">{item.name}</div>
         <div className="table_display">{item.initial_price}</div>
       </div>
      )
     })

    return (
      <section>
        <NavDropdown/>
        <section>
        <div className="table_display">view item</div>
        <div className="table_display">item name</div>
        <div className="table_display">asking price</div> 
        {htmlData}
        </section>
      </section>
    ) 
  }
}

export const mapStateToProps = (state) => {
  return {items: state.allItems}
}
export default connect(mapStateToProps)(ShowAll);