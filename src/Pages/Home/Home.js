import React, { Component } from "react";
import BigShoes from "../../assets/big-shoes.png";
import MapaLivros from "../../assets/mapa-livros.png";
import Footer from "../../components/Footer/Footer";
import Rectangle from "../../assets/Rectangle.png";
import "./home.css";

import NavBar from "../../components/NavBar/NavBar";

import ContinentList from "../../components/ContinentList/ContinentList";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { continent: "" };
  }
  render() {
    const navLinks = [
      { description: "Saiba mais", path: "#sobre" },
      { description: "Descubra", path: "#descubra" },
      { description: "Colabore", path: "/colabore" },
      { description: "Sobre mim", path: "/sobreMim" },
    ];

    return (
      <>
        <NavBar links={navLinks} />

        <header className="container-header">
          <div className="container">
            <div className="row">
            <div aria-label="ilustração de uma mulher sentada em uma pilha de livros lendo e um vaso na direita da imagem"></div>
              <h1 className="home-title--style col-md-6 pt-5">
                Para quais países você viaja sem sair de casa?
              </h1>
            </div>
          </div>
        </header>
        <section>
          <img className="img-fluid img--rectangule" src={Rectangle} alt="imagem de um retângulo rosa"/>
        </section>

        <main>
          <section id="sobre">
            <div className="container mt-5 mb-5">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img className="img-fluid" src={BigShoes} alt="ilustração de uma mulher em pé apontando para o lado direito da tela"/>
                </div>
                <div className="col-md-5">
                  <h2 className="text-center">Já reparou?</h2>
                  <p className="text-justify paragraph--style">
                    {" "}
                    Quando vamos a uma livraria a maioria dos livros de
                    literatura estrangeira são traduções do inglês para
                    português... Você já teve a impressão que a grande maioria
                    são de pessoas dos Estados Unidos ou do Reino Unido? Já
                    pensou em conhecer um lugar diferente com um guia local, sem
                    sair de casa? Nossa missão é apresentar para você outras
                    possibilidades, já que nosso planeta tem 198 países e
                    milhares de idiomas. Fizemos uma pequena curadoria para
                    apresentar escritores e escritoras das mais diversas
                    regiões.
                    <br />
                    <strong>Vamos Juntas?!</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="descubra">
            <h1 className="text-center m-5">Descubra!</h1>
          </section>
          <div className="container mb-5 ">
            <div className="row ">
              <img
                src={MapaLivros}
                className="mapa-livro col-md-9 img-fluid"
                alt="ilustração do mapa mundi com livros"
              />

              <section className=" continent--buttons-container  col-md-3 d-flex flex-column justify-content-md-between ">
                <a
                  href="#authorCards"
                  className="btn  continent--buttons btn-lg  "
                  onClick={() => this.setState({ continent: "America" })}
                >
                  América
                </a>
                <a
                  href="#authorCards"
                  className="btn continent--buttons btn-lg  "
                  onClick={() => this.setState({ continent: "Africa" })}
                >
                  Africa
                </a>{" "}
                <a
                  href="#authorCards"
                  className="btn continent--buttons btn-lg"
                  onClick={() => this.setState({ continent: "Asia" })}
                >
                  Asia
                </a>{" "}
                <a
                  href="#authorCards"
                  className="btn continent--buttons btn-lg"
                  onClick={() => this.setState({ continent: "Europa" })}
                >
                  Europa
                </a>{" "}
                <a
                  href="#authorCards"
                  className="btn continent--buttons btn-lg mb-1"
                  onClick={() => this.setState({ continent: "Oceania" })}
                >
                  Oceania
                </a>{" "}
              </section>
              <div id="authorCards">
                {this.state.continent !== "" ? (
                  <ContinentList continent={this.state.continent} />
                ) : null}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
