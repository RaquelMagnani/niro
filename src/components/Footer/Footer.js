import React from 'react';
import Heart from "../../assets/heart-1.png"
import "./footer.css"

const Footer =()=>{
    return(
    <footer className="footer--design text-center">
      Desenvolvido com <img className="heart--img" src={Heart} alt="imagem de um coração vazado"/> por Raquel M. Pinheiro
    </footer>
    )
}


export default Footer;