import React, { useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { links } = props;
  return (
    <Navbar light expand="md">
      <NavbarBrand href="/">Niro</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {links.map((link) => (
            <NavItem>
              {link.path === "#descubra" ||
              link.path === "#sobre" ? (
                <NavLink href={link.path}>{link.description}</NavLink>
              ) : (
                <Link className="nav-link" to={link.path}>
                  {link.description}
                </Link>
              )}
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
