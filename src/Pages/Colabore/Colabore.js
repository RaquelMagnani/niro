import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import MyForm from '../../components/MyForm/MyForm';
import './colabore.css';

const navLinks = [
    { description: "Sobre mim", path: "/quem-sou-eu" },
  
  ]

const Colabore =()=>{
    return(
        
        <div>
        <NavBar links={navLinks} />
        <div className='background'>
        <main className='MyForm--container container  '>
         
        <MyForm />
        
        </main>
        <Footer className='footer--container'/>
        </div>
        </div>
        
    )
}


export default Colabore;