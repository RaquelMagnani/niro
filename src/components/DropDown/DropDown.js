import React, { useState } from 'react';





const DropDown = (props) => {

  const {paises}=props
  
  return (
    <select>
        {paises.map((pais) => (
            <option >{pais}</option>
          ))}
    </select>
    
  );
}

export default DropDown;