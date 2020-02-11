import React from 'react';
import './Registro.css';
function Registro() {

    return (
        

                <div className="col-6 formulario">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1" id="email">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" id="email">Email address de nuevo</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" id="password">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" id="password">Password de nuevo</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
    
                        <button type="submit" class="btn btn-primary">Registrarse</button>
                    </form>
                </div>
               

    );
}

export default Registro;