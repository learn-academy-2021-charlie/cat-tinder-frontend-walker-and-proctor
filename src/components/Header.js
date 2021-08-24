import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import catLogo from '../assets/cat-logo.png'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo"/>
      </Navbar>
    </div>
  );
}

export default Header;