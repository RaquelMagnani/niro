import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Profile from "../../assets/profile.jpeg"
import "./quem-sou-eu.css";

const navLinks = [{ description: "Colabore", path: "/colabore" }];

const QuemSouEu = () => {
  return <React.Fragment>
      <NavBar links={navLinks}/>
      <img src={Profile}/>

  </React.Fragment>;
};

export default QuemSouEu;
