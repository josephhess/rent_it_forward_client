import React from 'react';
import {DropdownToggle,DropdownMenu, DropdownItem, UncontrolledDropdown} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class NavDropdown extends React.Component {

  handleKeyPress(target, endpoint) {
    console.log(target.keyCode)
    if(target.keyCode === 13){
      console.log(this)
      this.props.history.push(endpoint);  
    }

}

  render(){
    if(!this.props.token){
      return (
        <header className="header" role="banner">
          <h1>Rent It Forward</h1>
        </header>
      )
    }
  return (
    <header className="header">
      <nav>
        <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="nav_link">
          Navigation
        </DropdownToggle>
        <DropdownMenu left="true">
          <DropdownItem onKeyDown={e => this.handleKeyPress(e, "/showall")} role="menuitem" tag={Link} to="/showall">View Items</DropdownItem>
          <DropdownItem onKeyDown={e => this.handleKeyPress(e, "/addItem")} role="menuitem" tag={Link} to="/addItem">Add Item</DropdownItem>
          <DropdownItem onKeyDown={e => this.handleKeyPress(e, "/myItems")} role="menuitem" tag={Link} to="/myItems">My items/offers</DropdownItem>
          <DropdownItem onKeyDown={e => this.handleKeyPress(e, "/logout")} role="menuitem" tag={Link} to="/logout">Logout</DropdownItem>
        </DropdownMenu>
        </UncontrolledDropdown>
      </nav>
      <h1>Rent It Forward</h1>
    </header>
  )
  }

}
export const mapStateToProps = (state) => {
  return {token: state.authReducer.authToken}
};

export default withRouter(connect(mapStateToProps)(NavDropdown));
