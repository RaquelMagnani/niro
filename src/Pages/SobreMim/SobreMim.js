import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Profile from '../../assets/profile1.png';
import GitHub from '../../assets/githubLogo.png';
import LinKedin from '../../assets/linkedinLogo.png';
import './sobreMim.css';

const navLinks = [
  { description: 'Home', path: '/' },
  { description: 'Colabore', path: '/colabore' },
];

const SobreMim = () => {
  return (
    <React.Fragment>
      <NavBar links={navLinks} />
      <header className="header--container text-center">
        <img
          className="profile--img img-fluid mt-5"
          src={Profile}
          alt="imagem de perfil da autora"
        />
        <h1 className="mt-3 title--style">Sobre a Autora</h1>
      </header>
      <main>
        <p className=" profile--paragraph mt-5 mx-md-5 px-5 text-center">
          Olá! Eu sou a <strong>Raquel</strong>, moro em São Bernardo do
          Campo-São Paulo com minha esposa e meus dois gatos Julieta e Cisco. Da
          curiosidade em tecnologia e da necessidade de me reinventar
          profissionalmente veio a ideia de entrar no Reprograma e começar uma
          nova carreira, e aqui estou eu! :)
          <br />
          Niro nasceu do meu amor por livros, e incomodo de ver que a maioria
          dos livros que temos acesso são de autores dos Estados Unidos ou Reino
          Unido e quis trazer outras possibilidades! Espero que gostem!{' '}
        </p>
        <section className="text-center mt-5 mb-5 ">
          <h3 className="mb-2">Me mande um oi :) </h3>
          <div className="container--icons">
            <a href="https://github.com/RaquelMagnani" target="blank">
              <img className="img--icons" src={GitHub} alt="logo do Github" />
            </a>

            <a href="https://www.linkedin.com/in/raquel-magnani-pinheiro/" target="blank">
              <img
                className="img--icons"
                src={LinKedin}
                alt="logo do Linkedin"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </React.Fragment>
  );
};

export default SobreMim;
