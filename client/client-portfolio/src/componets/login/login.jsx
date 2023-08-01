import React from "react";
import logo from '../../assets/logo.png';
import "./login.css"
const Login = ()=>{
    return (
        <div>
            <img src={logo} alt="Logo de Coder Help" className="logo" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <button className="login-button">Iniciar sesión</button>
            <a href="#" className="register-link">¿No estás registrado? Crea una nueva cuenta</a>
</div>
    )

}

export default Login;