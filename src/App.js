import React from 'react';
import './App.css';

import NavBar from './components/molecules/NavBar/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
     <header>
       <div className="container" style={{border: '2px solid red'}}>
         <div className="">

        <h1 className="col-md-6 pt-5">Para quais países você viaja sem sair de casa?</h1>
         </div>
       </div>
     </header> 
     <main>
     <div className="image-botton-home"/>
       <section className="container mt-5" style={{border: '2px solid red'}}>
       <div className="row">
       <img className="  image-home col-md-6" ></img>

       <div className="col-md-6">
         <h2 className="text-center">Já reparou?</h2>
         <p className="text-justify"> Quando vamos a uma livraria a maioria dos livros de literatura estrangeira são traduções do inglês para português...
Você já teve a impressão que a grande maioria são de pessoas dos Estados Unidos ou do Reino Unido?
Já pensou em conhecer algum lugar diferente com um guia local, sem sair de casa?
Nossa missão é apresentar para você outras possibilidades,já que nosso planeta tem 198 paises e milhares de idiomas.
Fizemos uma pequena curadoria para apresentar escritores e escritoras das mais diversas regiões.<br/>
Vamos Juntas!</p>
       </div>
       </div>
       </section>
       <section>
         <h1 className="text-center">Descubra!</h1>
         
       </section>
     </main>
    </div>
  );
}

export default App;
