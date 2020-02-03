import React from 'react';
import './Inicio.css';
function Inicio() {

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
                    <p>¿Nuevo en NiceTrip? <a href="www.google.com">Registrate</a></p>
                </div>
                <div className="col-4 cerrar">
                    <h1>+</h1>
                </div>

            </div>

            <div className="row">

                <div className="col-6 formulario">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1" id="email">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" id="password">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Recordarme</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                    </form>
                </div>
                <div className="col-6 tamaño">
                    <a href="www.google.com"><img className="tamaño1" src="https://i.ibb.co/tYq6QrN/firebaseui-android.png" alt="firebaseui-android"></img></a>
                    <a href="www.google.com"><img className="tamaño2" src="https://i.ibb.co/PxpBWf1/googleimg.png" alt="google"></img></a>
                </div>
            </div>

            <div className="row terminos">

                <p>* Al iniciar tu sesión, aceptas nuestros Términos de Uso y<br />recibirás correos electrónicos y actualizaciones de Wix; al<br /> reconocer que leíste nuestra Política de Privacidad </p>

            </div>
        </div>

    );
}

export default Inicio;