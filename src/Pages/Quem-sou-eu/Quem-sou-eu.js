import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Profile from "../../assets/profile1.png";
import GitHub from "../../assets/github-logo.png";
import "./quem-sou-eu.css";

const navLinks = [
  { description: "Home", path: "/" },
  { description: "Colabore", path: "/colabore" }
  
];

const QuemSouEu = () => {
  return (
    <React.Fragment>
      <NavBar links={navLinks} />
      <header className="header--container text-center">
        <img className="profile--img img-fluid mt-5" src={Profile} />
        <h1 className="mt-3 title--style">Sobre a Autora</h1>
      </header>
      <main>
        <p className=" profile--paragraph mt-5 mx-5 px-5 text-center">
          Olá! Eu sou a <strong>Raquel</strong>, moro em São Bernardo do
          Campo-São Paulo com minha esposa e meus dois gatos Julieta e Cisco. Da
          curiosidade em tecnologia e da necessidade de me reinventar
          profissionalmente veio a ideia de entrar no Reprograma e começar uma
          nova carreira, e aqui estou eu! :)
          <br />
          Niro nasceu do meu amor por livros, e incomodo de ver que a maioria
          dos livros que temos acesso são de autores dos Estados Unidos ou Reino
          Unido e quis trazes outras possibilidades! Espero que gostem!{" "}
        </p>
        <section className="text-center mt-5 mb-5">
          <h3>Me mande um oi </h3>
          <a href="https://github.com/RaquelMagnani">GitHub</a> <br />
          <a href="https://www.linkedin.com/in/raquel-magnani-pinheiro/">
            LinKedin
          </a>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default QuemSouEu;
