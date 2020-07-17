import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropDown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {paises}=props
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown  isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Escolha um pais!
        </DropdownToggle>
      <DropdownMenu>
      {paises.map((pais) => (
            <DropdownItem pais={pais.name}/>
          ))} 
      
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;