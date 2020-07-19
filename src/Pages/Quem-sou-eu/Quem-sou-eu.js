import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Profile from "../../assets/profile1.png"
import GitHub from "../../assets/github-logo.png"
import "./quem-sou-eu.css";



const navLinks = [{ description: "Colabore", path: "/colabore" }];

const QuemSouEu = () => {
  return <React.Fragment>
      <NavBar links={navLinks}/>
      <main className="main--container text-center mt-5 mb-5">
      <img className="profile--img img-fluid justify-content" src={Profile}/>
      <p className=" profile--paragraph mt-5 mx-5 px-5 text-center">Olá! Eu sou a <strong>Raquel</strong>, moro em São Bernardo do Campo-São Paulo com minha esposa e meus dois gatos Julieta e Cisco. 
Da curiosidade em tecnologia e da necessidade de me reinventar profissionalmente veio a ideia de entrar no Reprograma e começar uma nova carreira, e aqui estou eu! :)
Niro nasceu do meu amor por livros,  e incomodo de ver que a maioria dos livros que temos acesso são de autores dos Estados Unidos ou Reino Unido e quis trazes outras possibilidades!<br/>

Espero que gostem! </p>
<section>
  <p>Me mande um oi </p>
<a href="https://github.com/RaquelMagnani">GitHub</a> <br/>
<a href="https://www.linkedin.com/in/raquel-magnani-pinheiro/" >LinKedin</a>
  
</section>
</main>

    <Footer/>
  </React.Fragment>;
};

export default QuemSouEu;
