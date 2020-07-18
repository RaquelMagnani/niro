import React, {Component} from "react";
import BigShoes from "../../assets/big-shoes.png";
import MapaLivros from "../../assets/mapa-livros.png";
import Footer from "../../components/Footer/Footer"
import "./home.css";
import {Link} from "react-router-dom"

import NavBar from "../../components/NavBar/NavBar";

import ContinentList from "../../components/ContinentList/ContinentList";





class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { continent :''};
  }
  render(){

    
      return (
        <>
          <NavBar />
    
          <header>
            <div className="container">
              <div className="row">
                <h1 className="col-md-6 pt-5">
                  Para quais países você viaja sem sair de casa?
                </h1>
              </div>
            </div>
          </header>
    
          <main>
            <section id="sobre">
              <div className="container mt-5 mb-5">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img className="img-fluid" src={BigShoes} />
                  </div>
                  <div className="col-md-5">
                    <h2 className="text-center">Já reparou?</h2>
                    <p className="text-justify">
                      {" "}
                      Quando vamos a uma livraria a maioria dos livros de literatura
                      estrangeira são traduções do inglês para português... Você já
                      teve a impressão que a grande maioria são de pessoas dos
                      Estados Unidos ou do Reino Unido? Já pensou em conhecer um
                      lugar diferente com um guia local, sem sair de casa? Nossa
                      missão é apresentar para você outras possibilidades,já que
                      nosso planeta tem 198 paises e milhares de idiomas. Fizemos
                      uma pequena curadoria para apresentar escritores e escritoras
                      das mais diversas regiões.
                      <br />
                      Vamos Juntas!
                    </p>
                  </div>
                </div>
              </div>
            </section>
    
            
            <section id='descubra'>
              <h1 className="text-center m-5">Descubra!</h1>
            </section>
            <div className="container mb-5 ">
              <div className="row ">
              <img src={MapaLivros} className="mapa-livro col-md-10 img-fluid" />
              
              <section className="  col-md-2 d-flex flex-column justify-content-md-between ">
             
                <Link  className="btn btn-primary btn-lg "
                onClick={()=>this.setState({continent:'America'})}>
                  America
                </Link>
                <Link  className="btn btn-primary btn-lg  "
                onClick={()=>this.setState({continent:'Africa'})}>
                  Africa
                </Link>{" "}
                 <Link  className="btn btn-primary btn-lg"
                 onClick={()=>this.setState({continent:'Asia'})}>
                  Asia
                </Link>{" "}
                <Link className="btn btn-primary btn-lg"
                onClick={()=>this.setState({continent:'Europa'})}>
                  Europa
                </Link>{" "}
                <Link  className="btn btn-primary btn-lg mb-1"
                onClick={()=>this.setState({continent:'Oceania'})}>
                  Oceania
                </Link>{" "}  
              </section>
              { this.state.continent !== '' ?
                <ContinentList continent={this.state.continent}/>
                :
                null
              }
            </div>
            </div>
              
    
           
          </main>
          <Footer/>
         
        </>
      );
  }
}

export default Home;
