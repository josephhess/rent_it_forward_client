import React from 'react';
import {DropdownToggle,DropdownMenu, DropdownItem, UncontrolledDropdown} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function NavDropdown(props) {

  return (
    <div> 
    <UncontrolledDropdown setActiveFromChild>
    <DropdownToggle tag="a" className="nav_link">
      Navigation
    </DropdownToggle>
    <DropdownMenu left="true">
      <DropdownItem tag={Link} to="/">Home</DropdownItem>
      <DropdownItem tag={Link} to="/showall">View Items</DropdownItem>
      <DropdownItem tag={Link} to="/addItem">Add Item</DropdownItem>
      <DropdownItem tag={Link} to="/makeOffer">Make Offer</DropdownItem>
      <DropdownItem tag={Link} to="/myItems">My items/offers</DropdownItem>
    </DropdownMenu>
    </UncontrolledDropdown>
  </div>
  )
}
