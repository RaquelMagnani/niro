import React,{useState} from 'react';
import './navBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   
  } from 'reactstrap';

  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      
        <Navbar light expand="md">
          <NavbarBrand href="/">Niro</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Sobre</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#descubra">Descubra</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Colabore</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      
    );
  }
  

export default NavBar;