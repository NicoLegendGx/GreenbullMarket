import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <div className="container valign-wrapper" style={{ minHeight: "90vh" }}>
      <div className="row" style={{ width: "100%" }}>
        <div className="col s12 m8 l6 offset-m2 offset-l3">
          <div className="card z-depth-3">
            <div className="card-content">
              <h4 className="center green-text text-darken-3">
                {isRegister ? "Crear cuenta" : "Iniciar sesión"}
              </h4>

              <div className="row" style={{ marginTop: "30px" }}>
                {!isRegister ? (
                  <>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input id="email" type="email" className="validate" />
                      <label htmlFor="email">Correo electrónico</label>
                    </div>

                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input id="password" type="password" className="validate" />
                      <label htmlFor="password">Contraseña</label>
                    </div>

                    <div className="center col s12">
                      <button className="btn waves-effect waves-light green darken-2" type="submit">
                        Ingresar
                      </button>
                    </div>

                    <div className="center col s12" style={{ marginTop: "20px" }}>
                      <a href="#!" className="grey-text text-darken-1">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>

                    <div className="center col s12" style={{ marginTop: "20px" }}>
                      <p>
                        ¿No tienes una cuenta?{" "}
                        <button
                          onClick={toggleForm}
                          className="btn-flat green-text text-darken-2"
                          style={{ fontWeight: "bold", textTransform: "none" }}
                        >
                          Regístrate
                        </button>
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">account_circle</i>
                      <input id="name" type="text" className="validate" />
                      <label htmlFor="name">Nombre completo</label>
                    </div>

                    <div className="input-field col s12">
                      <i className="material-icons prefix">email</i>
                      <input id="email_register" type="email" className="validate" />
                      <label htmlFor="email_register">Correo electrónico</label>
                    </div>

                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock</i>
                      <input id="password_register" type="password" className="validate" />
                      <label htmlFor="password_register">Contraseña</label>
                    </div>

                    <div className="center col s12">
                      <button className="btn waves-effect waves-light green darken-2" type="submit">
                        Crear cuenta
                      </button>
                    </div>

                    <div className="center col s12" style={{ marginTop: "20px" }}>
                      <p>
                        ¿Ya tienes una cuenta?{" "}
                        <button
                          onClick={toggleForm}
                          className="btn-flat green-text text-darken-2"
                          style={{ fontWeight: "bold", textTransform: "none" }}
                        >
                          Inicia sesión
                        </button>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
