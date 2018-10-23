import React from 'react';
import {DropdownToggle,DropdownMenu, DropdownItem, UncontrolledDropdown} from 'reactstrap';

export default function NavDropdown(props) {

  return (
    <div> 
    <UncontrolledDropdown setActiveFromChild>
    <DropdownToggle tag="a" className="nav_link">
      Navigation
    </DropdownToggle>
    <DropdownMenu left="true">
      <DropdownItem tag="a" href="/">Home</DropdownItem>
      <DropdownItem tag="a" href="/showall">View Items</DropdownItem>
      <DropdownItem tag="a" href="/addItem">Add Item</DropdownItem>
      <DropdownItem tag="a" href="/makeOffer">Make Offer</DropdownItem>
      <DropdownItem tag="a" href="/myItems">My items/offers</DropdownItem>
    </DropdownMenu>
    </UncontrolledDropdown>
  </div>

  )
}
