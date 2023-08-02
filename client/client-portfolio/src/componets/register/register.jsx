import React from "react";
import logo from '../../assets/logo.png';
import "./register.css";

const Register = () => {
  return (
    <div>
      <img src={logo} alt="Logo de Coder Help" className="logo" />
      <input type="text" placeholder="Nombre de usuario" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Contraseña" className="input" />
      <input type="password" placeholder="Confirmar contraseña" className="input" />
      <button className="register-button">Registrarse</button>
      <a href="#" className="login-link">¿Ya tienes una cuenta? Inicia sesión</a>
    </div>
  );
}

export default Register;