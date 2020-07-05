import React from "react";
import BigShoes from "./assets/big-shoes.png";
import MapaLivros from "./assets/mapa-livros.png";
import "./App.css";

import NavBar from "./components/molecules/NavBar/NavBar";
import { Button } from "reactstrap";

function App() {
  return (
    <>
      <NavBar />

      <header>
        <div className="container" >
          <div className="row">
            <h1 className="col-md-6 pt-5">
              Para quais países você viaja sem sair de casa?
            </h1>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="container mt-5 mb-5">
            <div className="row align-items-center">
              <div className="col-md-6"> 
                <img className="img-fluid" src={BigShoes} />
                </div>
                <div className="col-md-5">
                  <h2 className="text-center">Já reparou?</h2>
                  <p className="text-justify">
                    {" "}
                    Quando vamos a uma livraria a maioria dos livros de
                    literatura estrangeira são traduções do inglês para
                    português... Você já teve a impressão que a grande maioria
                    são de pessoas dos Estados Unidos ou do Reino Unido? Já
                    pensou em conhecer um lugar diferente
                    com um guia local, sem sair de casa? Nossa missão é
                    apresentar para você outras possibilidades,já que nosso
                    planeta tem 198 paises e milhares de idiomas. Fizemos uma
                    pequena curadoria para apresentar escritores e escritoras
                    das mais diversas regiões.
                    <br />
                    Vamos Juntas!
                  </p>
                </div>
              
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-center m-5">Descubra!</h1>

         {/*} <img src={MapaLivros} className="mapa-livro" />*/}
        </section>
        <section className="container botoes mb-5">
          <div>
            <Button color="primary" className="col-sm-1 col-md-2 mb-1">
              {" "}
              America
            </Button>{" "}
            <Button color="secondary" className="col-sm-1 col-md-2 mb-1">
              Africa
            </Button>{" "}
            <Button color="success" className="col-sm-1 col-md-2 mb-1">
              Asia
            </Button>{" "}
            <Button color="info" className="col-sm-1 col-md-2 mb-1">
              Europa
            </Button>{" "}
            <Button color="warning" className="col-sm-1 col-md-2 mb-1">
              Oceania
            </Button>{" "}
          </div>
        </section>
      </main>
      <footer>
      Feito com amor por Raquel Magnani Pinheiro
Copyright blabla bla 2020
      </footer>
    </>
  );
}

export default App;
