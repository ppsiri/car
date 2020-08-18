/*import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const List = (props) => {
  return (
    <ListGroup flush>
      <ListGroupItem disabled tag="a" href="#">เข้าสู่ระบบ</ListGroupItem>
      <ListGroupItem tag="a" href="#">ผู้ใช้งานทั่วไป</ListGroupItem>
      <ListGroupItem tag="a" href="#">ผู้ดูแลระบบ</ListGroupItem>
      <ListGroupItem tag="a" href="#">พนักงานขับ</ListGroupItem>
    
    </ListGroup>
  );

}
export default List;*/


import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const List = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div style ={{color:'white',backgroundColor:'white',}}>
      <Navbar color="white" light>
        <NavbarBrand href="/" className="mr-auto">เข้าสู่ระบบ</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/user">ผู้ใช้งานทั่วไป</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin">ผู้ดูแลระบบ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">พนักงานขับ</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default List;