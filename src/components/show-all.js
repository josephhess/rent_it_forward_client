import React from 'react';
import {connect} from 'react-redux';
import '../styles/showall.css';
import {getAllItems} from '../actions';
import {Redirect, Link} from 'react-router-dom';

class ShowAll extends React.Component {

componentDidMount(){
  this.props.dispatch(getAllItems());
}

  render(){
    // if( !this.props.current_user_id ){
    //    return <Redirect to="/"/>
    //   }

    const htmlData = this.props.items.map( (item, index) => {
      return (
      <tr key={index}>
         <td ><Link to={{pathname: 'makeOffer', state:  {id: item._id}} }>{item.name}</Link></td>
         <td >{item.initial_price}</td>
         <td className="display_if_wide">{item.description}</td>
       </tr>
      )
     })

    return (
      <section>
        <table className="table_parent">
        <tbody>
          <tr>
            <td >item name</td>
            <td >asking price</td>
            <td className="display_if_wide">description</td>
        </tr>
        {htmlData}
        </tbody>
        </table>
      </section>
    ) 
  }
}

export const mapStateToProps = (state) => {
  return {
    items: state.allItems,
    current_user_id: state.current_user_id
  }
}
export default connect(mapStateToProps)(ShowAll);