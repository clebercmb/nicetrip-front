import React, { useState } from "react";
import "../styles/Login.css";
import Inicio from "../components/inicio/Inicio";
import Registro from "../components/Registro/Registro";


const Login = function () {
    const [conditionalRender, setConditionalRender] = useState(true);

    if (conditionalRender) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 logo">
                        <a href="https://ibb.co/qgfGthw">
                            <img src="https://i.ibb.co/qgfGthw/travel-tourism-logo-isolated-on-white-background-vector.jpg" alt="travel-tourism-logo-isolated-on-white-background-vector" border="0" />
                        </a>
                    </div>
                    <div className="col-4 titulo">
                        <h1>REGíSTRATE</h1>
                        <p>¿Nuevo en NiceTrip? <a href="/#" onClick={() => setConditionalRender(false)}>Iniciar Sesión</a></p>
                    </div>
                    <div className="col-4 cerrar">
                        <h1>+</h1>
                    </div>
                </div>

                <div className="row">
                    <Registro />
                    <div className="col-6 tamaño">
                        <a href="www.google.com"><img className="tamaño1" src="https://i.ibb.co/tYq6QrN/firebaseui-android.png" alt="firebaseui-android"></img></a>
                        <a href="www.google.com"><img className="tamaño2" src="https://i.ibb.co/PxpBWf1/googleimg.png" alt="google"></img></a>
                    </div>
                </div>

                <div className="row terminos">

                    <p>* Al iniciar tu sesión, aceptas nuestros Términos de Uso y<br />recibirás correos electrónicos y actualizaciones de Wix; al<br /> reconocer que leíste nuestra Política de Privacidad </p>

                </div>
            </div>

        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 logo">
                        <a href="https://ibb.co/qgfGthw">
                            <img src="https://i.ibb.co/qgfGthw/travel-tourism-logo-isolated-on-white-background-vector.jpg" alt="travel-tourism-logo-isolated-on-white-background-vector" border="0" />
                        </a>
                    </div>
                    <div className="col-4 titulo">
                        <h1>INICIAR SESION</h1>
                        <p>¿Nuevo en NiceTrip? <a href="/#" onClick={() => setConditionalRender(true)}>Registrate</a></p>
                    </div>
                    <div className="col-4 cerrar">
                        <h1>+</h1>
                    </div>

                </div>
              
                <div className="row">
                <Inicio/>
                    <div className="col-6 tamaño">
                        <a href="www.google.com"><img className="tamaño1" src="https://i.ibb.co/tYq6QrN/firebaseui-android.png" alt="firebaseui-android"></img></a>
                        <a href="www.google.com"><img className="tamaño2" src="https://i.ibb.co/PxpBWf1/googleimg.png" alt="google"></img></a>
                    </div>
                </div>

                <div className="row terminos">

                    <p>* Al iniciar tu sesión, aceptas nuestros Términos de Uso y<br />recibirás correos electrónicos y actualizaciones de Wix; al<br /> reconocer que leíste nuestra Política de Privacidad </p>

                </div>
            </div>
        )
    }
};

export default Login;