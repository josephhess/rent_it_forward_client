import React from 'react';
import {DropdownToggle,DropdownMenu, DropdownItem, UncontrolledDropdown} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NavDropdown extends React.Component {

  render(){
    if(!this.props.token){
      return (
        <header className="header">
          <h1>Rent It Forward</h1>
        </header>
      )
    }
  return (
    <header className="header">
    <UncontrolledDropdown setActiveFromChild>
    <DropdownToggle tag="a" className="nav_link">
      Navigation
    </DropdownToggle>
    <DropdownMenu left="true">
      <DropdownItem tag={Link} to="/">Home</DropdownItem>
      <DropdownItem tag={Link} to="/showall">View Items</DropdownItem>
      <DropdownItem tag={Link} to="/addItem">Add Item</DropdownItem>
      <DropdownItem tag={Link} to="/myItems">My items/offers</DropdownItem>
    </DropdownMenu>
    </UncontrolledDropdown>
    <h1>Rent It Forward</h1>
  </header>
  )
  }

}
export const mapStateToProps = (state) => {
  return {token: state.token}
};

export default connect(mapStateToProps)(NavDropdown);
