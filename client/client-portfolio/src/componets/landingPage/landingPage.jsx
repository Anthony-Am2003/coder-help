import React from "react";
import './landingPage.css';
import logo from '../../assets/logo.png'

const LandingPage = ()=>{
    return (
        <div className="landing-page-container">
            <img src={logo} alt="Logo de Coder Help" className="logo" />
      <h1 className="title">Bienvenido a Coder Help</h1>
      <p className="message">
        ¡Bienvenido a Coder Help! Aquí encontrarás contenido de valor y tips para desarrolladores. Aprende nuevas habilidades, mejora tu conocimiento y alcanza tus metas en el mundo del desarrollo web.
      </p>
      <div className="options-container">
        <a href="#" className="option recruiter">Reclutador</a>
        <a href="#" className="option developer">Desarrollador</a>
      </div>
    </div>
    )
}
export default LandingPage;
