import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
import MyForm from '../../components/MyForm/MyForm'
import './colabore.css'
import { Row,Col } from 'reactstrap';

const Colabore =()=>{
    return(
        <div>
        <NavBar />
        <main className='MyForm--container container '>
         
        <MyForm/>
        
        </main>
        <Footer/>
        
        </div>
        
    )
}


export default Colabore;